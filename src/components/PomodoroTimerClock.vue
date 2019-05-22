<template>
  <section class="PomodoroTimerClock">
    <time class="PomodoroTimerClock__counter">{{ formatTime }}</time>
  </section>
</template>

<script>
import config from '../../config';
import { eventBus } from '../main';

export default {
  name: 'PomodoroTimerClock',
  data() {
    return {
      isPaused: false,
      isBreak: false,
      isLongBreak: false,
      interval: null,
      timer: null,
      shortBreakCounter: 0,
      workTime: config.workTimeInSeconds,
      breakTime: config.breakTimeInSeconds,
      longBreakTime: config.longBreakTimeInSeconds,
    }
  },
  computed: {
    formatTime() {
      const time = this.getTimeToStartFrom();
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  },
  created() {
    eventBus.$on('p-timer-tools-toggle', (isStarted) => {
      if (isStarted) {
        return this.start();
      } 
      return this.stop();
    });
    eventBus.$on('p-timer-tools-restart', () => this.restart());
    eventBus.$on('p-settings-sidebar-work-time-change', (valueInSeconds) => {
      this.workTime = valueInSeconds;
      this.restart();
    });
    eventBus.$on('p-settings-sidebar-break-time-change', (valueInSeconds) => {
      this.breakTime = valueInSeconds;
      this.restart();
    });
    eventBus.$on('p-settings-sidebar-long-break-time-change', (valueInSeconds) => {
      this.longBreakTime = valueInSeconds;
      this.restart();
    });
    eventBus.$on('p-settings-sidebar-reset-defaults', () => {
      this.resetDefaults();
      this.restart();
    });
  },
  methods: {
    start() {
       this.isPaused = false;
       const time = this.getTimeToStartFrom();
       this.timer = time;
       this.interval = setInterval(() => this.countdown(), 1000);
     },
    stop() {
       this.isPaused = true;
       if (this.interval) {
         clearInterval(this.interval);
         this.interval = null;
       }
     },
    restart() {
      this.stop();
      this.resetTimer();
    },
    countdown(to = 0) {
      --this.timer;
      if (this.timer <= to) {
        this.stop();
        this.resetTimer();
        this.updateState();
        this.start();
      }
    },
    getTimeToStartFrom() {
      if (this.timer && this.timer > 0) {
        return this.timer;
      }
      if (this.isBreak) {
        return this.breakTime;
      }
      if (this.isLongBreak) {
        return this.longBreakTime;
      }
      return this.workTime;
    },
    updateState() {
      if (!this.isBreak && !this.isLongBreak) {
        if (this.shortBreakCounter >= config.breaksUntilLongBreak) {
          this.shortBreakCounter = 0;
          this.isLongBreak = true;
          eventBus.$emit('p-timer-header-title-change', config.titles.longBreak);
        } else {
          this.shortBreakCounter++;
          this.isBreak = true;
          eventBus.$emit('p-timer-header-title-change', config.titles.break);
        }
      } else {
        this.isLongBreak = false;
        this.isBreak = false;
        eventBus.$emit('p-timer-header-title-change', config.titles.work);
      }
    },
    resetTimer() {
      this.timer = null;
    },
    resetDefaults() {
      this.workTime = config.workTimeInSeconds;
      this.breakTime = config.breakTimeInSeconds;
      this.longBreakTime = config.longBreakTimeInSeconds;
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/partials/variables/_palette';

.PomodoroTimerClock {
  align-items: center;
  border: 5px solid $palette-font-primary;
  border-radius: 50%;
  display: flex;
  height: 250px;
  justify-content: center;
  width: 250px;

  &__counter {
    font-size: 3rem;
  }
}
</style>