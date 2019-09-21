<template>
  <table class="PomodoroTimerModalTable">
    <tbody class="PomodoroTimerModalTable__body">
      <tr class="PomodoroTimerModalTable__row">
        <td class="PomodoroTimerModalTable__cell">
          <span class="PomodoroTimerModalTable__shortcut-button">S</span>
        </td>
        <td class="PomodoroTimerModalTable__cell">Start and stop the timer</td>
      </tr>
      <tr class="PomodoroTimerModalTable__row">
        <td class="PomodoroTimerModalTable__cell">
          <span class="PomodoroTimerModalTable__shortcut-button">R</span>
        </td>
        <td class="PomodoroTimerModalTable__cell">Restart the timer</td>
      </tr>
      <tr class="PomodoroTimerModalTable__row">
        <span class="PomodoroTimerModalTable__shortcut-button">I</span>
        <td class="PomodoroTimerModalTable__cell">Toggle timer shortcuts modal</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'PomodoroTimerModalTable',
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/partials/variables/_palette';
@import '../assets/styles/partials/_mixins';

.PomodoroTimerModalTable {
  border-spacing: 0 2em;
  width: 100%;

  @include respond-to('tablet-min') {
    padding: 2.5em;
  }

  &__shortcut-button {
    background: $palette-background-primary;
    border-radius: 5px;
    box-shadow: 0 4px 2px -2px darken($palette-background-primary, 25%);
    display: block;
    text-align: center;
    padding: 0.25em 1em;
    width: 60px;
  }

  &__row {
    font-size: 0.8rem;
    margin: 0.5em;

    @include respond-to('tablet-min') {
      font-size: 1rem;
    }
  }
}
</style>
