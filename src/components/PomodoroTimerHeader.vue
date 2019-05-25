<template>
  <header class="PomodoroTimerHeader">
    <h2 class="PomodoroTimerHeader__heading">{{ title }}</h2>
  </header>
</template>

<script>
import config from '../../config';
import { eventBus } from '../main';

export default {
  name: 'PomodoroTimerHeader',
  data() {
    return {
      title: config.titles.work,
    }
  },
  created() {
    eventBus.$on('p-timer-header-title-change', title => this.updateTitle(title));
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    }
  }
}
</script>

<style lang="scss">
.PomodoroTimerHeader {
  &__heading {
    font-size: 3rem;
  }
}
</style>