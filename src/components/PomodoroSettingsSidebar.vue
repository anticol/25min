<template>
  <aside
    class="PomodoroSettingsSidebar"
    v-bind:class="{ 'PomodoroSettingsSidebar--hidden': !isVisible }"
  >
    <button
      class="PomodoroSettingsSidebar__closer"
      v-on:click="toggleSidebar"
    >
      <span aria-hidden="true">&times;</span>
      <span class="visuallyhidden">Close menu</span>
    </button>
    <form class="PomodoroSettingsSidebar__form">
      <label for="p-settings-sidebar-range-work">{{$t('work')}}</label>
      <p>{{ workTimeInputValue }}</p>
      <input
        type="range"
        min="1"
        max="120"
        step="1"
        value="25"
        class="PomodoroSettingsSidebar__range"
        id="p-settings-sidebar-range-work"
        v-on:change="updateWorkTime"
      >
      <label for="p-settings-sidebar-range-break">{{$t('break')}}</label>
      <p>{{ breakTimeInputValue }}</p>
      <input
        type="range"
        min="1"
        max="60"
        step="1"
        value="5"
        class="PomodoroSettingsSidebar__range"
        id="p-settings-sidebar-range-break"
        v-on:change="updateBreakTime"
      >
      <label for="p-settings-sidebar-range-long-break">{{$t('long_break')}}</label>
      <p>{{ longBreakTimeInputValue }}</p>
      <input
        type="range"
        min="1"
        max="100"
        step="1"
        value="10"
        class="PomodoroSettingsSidebar__range"
        id="p-settings-sidebar-range-long-break"
        v-on:change="updateLongBreakTime"
      >
      <input
        type="reset"
        value="Reset to defaults"
        class="PomodoroSettingsSidebar__reset"
        v-on:click="resetDefaults()"
      >
    </form>
  </aside>
</template>

<script>
import config from '../../config';
import { eventBus } from '../main';

export default {
  name: 'PomodoroSettingsSidebar',
  data() {
    return {
      isVisible: false,
      workTimeInputValue: config.workTimeInSeconds / 60,
      breakTimeInputValue: config.breakTimeInSeconds / 60,
      longBreakTimeInputValue: config.longBreakTimeInSeconds / 60
    }
  },
  created() {
    eventBus.$on('p-settings-sidebar-toggle', () => {
      this.isVisible = !this.isVisible;
    });
  },
  methods: {
    toggleSidebar() {
      this.isVisible = !this.isVisible;
      eventBus.$emit('p-settings-sidebar-button-toggle');
    },
    updateWorkTime(event) {
      this.workTimeInputValue = event.target.value;
      eventBus.$emit('p-timer-tools-toggle-stop');
      eventBus.$emit('p-settings-sidebar-work-time-change', event.target.value * 60);
    },
    updateBreakTime(event) {
      this.breakTimeInputValue = event.target.value;
      eventBus.$emit('p-timer-tools-toggle-stop');
      eventBus.$emit('p-settings-sidebar-break-time-change', event.target.value * 60);
    },
    updateLongBreakTime(event) {
      this.longBreakTimeInputValue = event.target.value;
      eventBus.$emit('p-timer-tools-toggle-stop');
      eventBus.$emit('p-settings-sidebar-long-break-time-change', event.target.value * 60);
    },
    resetDefaults() {
      this.workTimeInputValue = config.workTimeInSeconds / 60;
      this.breakTimeInputValue = config.breakTimeInSeconds / 60;
      this.longBreakTimeInputValue = config.longBreakTimeInSeconds / 60;
      eventBus.$emit('p-timer-tools-toggle-stop');
      eventBus.$emit('p-settings-sidebar-reset-defaults');
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables/_palette';
@import '../assets/styles/partials/_mixins';
@import '../assets/styles/partials/_helpers';

.PomodoroSettingsSidebar {
  background-color: $palette-background-secondary;
  color: $palette-font-primary;
  display: block;
  height: 100%;
  overflow-x: hidden;
  padding: 2.5em;
  position: fixed;
  right: 0;
  top: 0;
  width: 350px;
  z-index: 1;

  &--hidden {
    display: none;
  }

  &__closer {
    background: transparent;
    border: none;
    color: $palette-font-secondary;
    cursor: pointer;
    font-size: 2.5rem;
    outline: none;
    position: absolute;
    right: 10px;
    top: 10px;

    &:focus,
    &:hover {
      color: $palette-font-primary;
    }
  }

  &__form {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  &__range {
    margin: 2rem;
    width: 100%;
  }

  &__reset {
    background: transparent;
    border: none;
    color: $palette-font-secondary;
    cursor: pointer;
    margin-top: 2em;
    outline: none;

    &:focus,
    &:hover {
      color: $palette-font-primary;
    }
  }

  &__range {
    background: transparent;
    height: 60px;
    margin: 1em;
    padding: 0.25em;
    width: 100%;

    &,
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    &:focus {
      border: 0px;
      outline: none;
    }

    &::-moz-range-track {
      @include input-range-track();
    }

    &::-moz-range-thumb {
      @include input-range-thumb();
    }

    &::-ms-track {
      @include input-range-track();
    }

    &::-ms-thumb {
      @include input-range-thumb();
    }

    &::-webkit-slider-runnable-track {
      @include input-range-track();
    }

    &::-webkit-slider-thumb {
      @include input-range-thumb();
      margin-top: -8.75px;
    }

    &::-ms-tooltip {
      display: none;
    }
  }
}
</style>

<i18n>
  {
  "en": {
  "work": "Work",
  "break": "Break",
  "long_break": "Long Break"
  },
  "sk": {
  "work": "Práca",
  "break": "Prestávka",
  "long_break": "Dlhá prestávka"
  },
  "de": {
  "work": "Arbeit",
  "break": "Pause",
  "long_break": "Lange Pause"
  },
  "fr": {
  "work": "Travail",
  "break": "Pause",
  "long_break": "Longe Pause"
  },
  "es": {
  "work": "Trabajado",
  "break": "Pausa",
  "long_break": "Pausa Larga"
  }
  }
</i18n>
