<template>
  <div id="app">
    <PomodoroSettingsSidebarToggler/>
    <PomodoroSettingsSidebar/>
    <PomodoroHeader/>
    <div class="row">
      <div class='column'>
      <PomodoroTimer/>
        </div>
        <div class='column'>
      <Todo></Todo>
        </div>
    </div>

  </div>
</template>

<script>
import PomodoroSettingsSidebarToggler from './components/PomodoroSettingsSidebarToggler';
import PomodoroSettingsSidebar from './components/PomodoroSettingsSidebar';
import PomodoroHeader from './components/PomodoroHeader';
import PomodoroTimer from './components/PomodoroTimer';
import Todo from './components/Todo';



export default {
  name: 'app',
  components: {
    PomodoroHeader,
    PomodoroTimer,
    PomodoroSettingsSidebarToggler,
    PomodoroSettingsSidebar,
    Todo
  }
}
</script>

<style>
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
</style>
