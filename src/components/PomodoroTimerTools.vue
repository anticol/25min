<template>
  <nav class="PomodoroTimerTools">
    <ul class="PomodoroTimerTools__list">
      <li class="PomodoroTimerTools__item">
        <button
          class="PomodoroTimerTools__toggler"
          v-on:click="restartTimer()"
        >
          <span aria-hidden="true">&#9850;</span>
          <span class="visuallyhidden">Restart</span>
        </button>
      </li>
      <li class="PomodoroTimerTools__item">
        <button
          class="PomodoroTimerTools__toggler PomodoroTimerTools__toggler--main"
          v-on:click="switchToggleButtonState()"
        >
          <span
            aria-hidden="true"
            v-html="switchToggleButtonIcon()"
          ></span>
          <span class="visuallyhidden">Start/stop pomodoro</span>
        </button>
      </li>
      <!--<li-->
        <!--class="PomodoroTimerTools__item"-->
        <!--v-on:click="toggleInfoModal()"-->
      <!--&gt;-->
        <!--<button class="PomodoroTimerTools__toggler">-->
          <!--<span aria-hidden="true">&#8505;</span>-->
          <!--<span class="visuallyhidden">Info</span>-->
        <!--</button>-->
      <!--</li>-->
    </ul>
  </nav>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'PomodoroTimerTools',
  data() {
    return {
      isToggleButtonPressed: false,
    }
  },
  created() {
    window.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 's') {
        return this.switchToggleButtonState();
      }

      if (event.key.toLowerCase() === 'r') {
        return this.restartTimer();
      }

      if (event.key.toLowerCase() === 'i') {
        return this.toggleInfoModal();
      }
    });
    eventBus.$on('p-timer-tools-toggle-stop', () => {
      this.isToggleButtonPressed = false;
    });
  },
  methods: {
    restartTimer() {
      this.isToggleButtonPressed = false;
      eventBus.$emit('p-timer-tools-restart');
    },
    switchToggleButtonState() {
      this.isToggleButtonPressed = !this.isToggleButtonPressed;
      eventBus.$emit('p-timer-tools-toggle', this.isToggleButtonPressed);
    },
    switchToggleButtonIcon() {
      if (this.isToggleButtonPressed) {
        return `&#10073;&#10073;`
      }
      return `&#9658;`;
    },
    toggleInfoModal() {
      eventBus.$emit('p-timer-tools-modal-toggle');
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables/_palette';
@import '../assets/styles/partials/_helpers';

.PomodoroTimerTools {
  margin-top: 1em;

  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    padding: 0.5em;
  }

  &__toggler {
    /*background: transparent;*/
    background-image: url("../assets/buttons.png");
    border: 3px solid $palette-font-secondary;
    border-radius: 50%;
    color: $palette-font-secondary;
    cursor: pointer;
    height: 50px;
    width: 50px;

    &--main {
      height: 60px;
      width: 60px;
    }

    &--main span {
      font-size: 25px;
    }

    &:hover,
    &:focus {
      border-color: $palette-font-primary;
      color: $palette-font-primary;
      outline: none;
    }
  }
}
</style>
