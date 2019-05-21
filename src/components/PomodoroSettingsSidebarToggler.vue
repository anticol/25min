<template>
  <button 
    class="PomodoroSettingsSidebarToggler"
    v-bind:class="{ 'PomodoroSettingsSidebarToggler--hidden': !isVisible }"
  >
    <span class="visuallyhidden">Open menu</span>
  </button>
</template>

<script>
export default {
  name: 'PomodoroSettingsSidebarToggler',
  data() {
    return {
      isVisible: true
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
  right: 25px;
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