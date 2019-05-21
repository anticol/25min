<template>
  <section class="PomodoroTimer">
    <PomodoroTimerHeader/>
  </section>
</template>

<script>
import PomodoroTimerHeader from './PomodoroTimerHeader';

export default {
  name: 'PomodoroTimer',
  components: {
    PomodoroTimerHeader
  },
}
</script>

<style lang="scss">
.PomodoroTimer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>