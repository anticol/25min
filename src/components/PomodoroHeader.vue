<template>
  <header class="PomodoroHeader">
    <img alt="Vue logo" src="../assets/logo.png" class="PomodoroHeader__img">
    <h1 class="PomodoroHeader__heading">Vue Pomodoro</h1>
  </header>
</template>

<script>
export default {
  name: 'PomodoroHeader',
}
</script>

<style lang="scss">
@import '../assets/styles/partials/_mixins';

.PomodoroHeader {
  align-items: center;
  display: flex;

  &__heading {
    display: none;
    margin: 0;
    text-align: center;

    @include respond-to('tablet-min') {
      display: block;
    }
  }

  &__img {
    height: 50px;
    width: 50px;
  }
}
</style>