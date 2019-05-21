<template>
  <section class="PomodoroTimer">
    <PomodoroTimerHeader/>
    <PomodoroTimerClock/>
    <PomodoroTimerTools/>
  </section>
</template>

<script>
import PomodoroTimerClock from './PomodoroTimerClock';
import PomodoroTimerHeader from './PomodoroTimerHeader';
import PomodoroTimerTools from './PomodoroTimerTools';

export default {
  name: 'PomodoroTimer',
  components: {
    PomodoroTimerClock,
    PomodoroTimerHeader,
    PomodoroTimerTools
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