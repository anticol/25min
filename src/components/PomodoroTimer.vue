<template>
  <section class="PomodoroTimer">
    <PomodoroTimerHeader/>
    <PomodoroTimerClock/>
  </section>
</template>

<script>
import PomodoroTimerClock from './PomodoroTimerClock';
import PomodoroTimerHeader from './PomodoroTimerHeader';

export default {
  name: 'PomodoroTimer',
  components: {
    PomodoroTimerClock,
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