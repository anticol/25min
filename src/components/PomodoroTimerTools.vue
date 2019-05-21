<template>
  <nav class="PomodoroTimerTools">
    <ul class="PomodoroTimerTools__list">
      <li class="PomodoroTimerTools__item">
        <button class="PomodoroTimerTools__toggler">
          <span aria-hidden="true">&#9850;</span>
          <span class="visuallyhidden">Restart</span>
        </button>
      </li>
      <li class="PomodoroTimerTools__item">
        <button class="PomodoroTimerTools__toggler PomodoroTimerTools__toggler--main">
          <span aria-hidden="true">&#9658;</span>
          <span class="visuallyhidden">Start/stop pomodoro</span>
        </button>
      </li>
      <li class="PomodoroTimerTools__item">
        <button class="PomodoroTimerTools__toggler">
          <span aria-hidden="true">&#8505;</span>
          <span class="visuallyhidden">Info</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PomodoroTimerTools'
}
</script>

<style lang="scss">
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
    background: transparent;
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

    &:hover,
    &:focus {
      border-color: $palette-font-primary;
      color: $palette-font-primary;
      outline: none;
    }
  }
}
</style>