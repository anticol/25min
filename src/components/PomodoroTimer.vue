<template>
  <section class="PomodoroTimer">
    <PomodoroTimerModal/>
    <PomodoroTimerHeader/>
    <PomodoroTimerClock/>
    <PomodoroTimerTools/>
  </section>
</template>

<script>
import PomodoroTimerModal from './PomodoroTimerModal';
import PomodoroTimerClock from './PomodoroTimerClock';
import PomodoroTimerHeader from './PomodoroTimerHeader';
import PomodoroTimerTools from './PomodoroTimerTools';

export default {
  name: 'PomodoroTimer',
  components: {
    //PomodoroTimerModal,
    PomodoroTimerClock,
    PomodoroTimerHeader,
    PomodoroTimerTools
  },
}
</script>

<style lang="scss" scoped>
.PomodoroTimer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-items: center;
  //border: 1px solid white;
  width: 400px;
  max-width: 100%;
  min-height: 470px;
  border-radius: 4px;
  margin: 20px auto 40px;
  margin-bottom: 0px;
  -webkit-box-shadow: 0 0 30px 0 rgba(232, 221, 221, 0.05);
  box-shadow: 0 0 30px 0 rgba(232, 221, 221, 0.05);
}
</style>
