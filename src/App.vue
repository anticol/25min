<template>
  <div id="app">
    <PomodoroSettingsSidebarToggler/>
    <PomodoroSettingsSidebar/>
    <PomodoroHeader/>
    <PomodoroTimer/>
  </div>
</template>

<script>
import PomodoroSettingsSidebarToggler from './components/PomodoroSettingsSidebarToggler';
import PomodoroSettingsSidebar from './components/PomodoroSettingsSidebar';
import PomodoroHeader from './components/PomodoroHeader';
import PomodoroTimer from './components/PomodoroTimer';

export default {
  name: 'app',
  components: {
    PomodoroHeader,
    PomodoroTimer,
    PomodoroSettingsSidebarToggler,
    PomodoroSettingsSidebar,
  }
}
</script>
