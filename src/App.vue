<template>
  <div id="app">
    <PomodoroSettingsSidebarToggler/>
    <PomodoroSettingsSidebar/>
    <PomodoroHeader/>
  </div>
</template>

<script>
import PomodoroSettingsSidebarToggler from './components/PomodoroSettingsSidebarToggler';
import PomodoroSettingsSidebar from './components/PomodoroSettingsSidebar';
import PomodoroHeader from './components/PomodoroHeader';

export default {
  name: 'app',
  components: {
    PomodoroHeader,
    PomodoroSettingsSidebarToggler,
    PomodoroSettingsSidebar,
  }
}
</script>
