<template>
  <section class="PomodoroTimerClock">
    <time class="PomodoroTimerClock__counter">25:00</time>
  </section>
</template>

<script>
export default {
  name: 'PomodoroTimerClock'
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