<template>
  <button 
    class="PomodoroSettingsSidebarToggler"
    v-bind:class="{ 'PomodoroSettingsSidebarToggler--hidden': !isVisible }"
    v-on:click="toggleButton"
  >
    <span class="visuallyhidden">Open menu</span>
  </button>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'PomodoroSettingsSidebarToggler',
  data() {
    return {
      isVisible: true,
    }
  },
  created() {
    eventBus.$on('p-settings-sidebar-button-toggle', () => {
      this.isVisible = !this.isVisible;
    });
  },
  methods: {
    toggleButton() {
      this.isVisible = !this.isVisible;
      eventBus.$emit('p-settings-sidebar-toggle');
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/partials/variables/_palette';
@import '../assets/styles/partials/_helpers';

.PomodoroSettingsSidebarToggler {
  background: transparent;
  border: 0;
  border-top: 4px solid $palette-font-secondary;
  cursor: pointer;
  height: 25px;
  outline: none;
  position: absolute;
  right: 35px;
  top: 25px;
  width: 40px;

  &--hidden {
    display: none;
  }

  &::before, &::after {
    border-top: 4px solid $palette-font-secondary;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    transform: translateY(5px);
    width: 100%;
  }

  &::after {
    transform: translateY(15px);
  }

  &:focus,
  &:hover,
  &:focus::before,
  &:focus::after,
  &:hover::before,
  &:hover::after {
    border-top: 4px solid $palette-font-primary;
  }
}
</style>