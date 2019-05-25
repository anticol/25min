<template>
  <dialog
    class="PomodoroTimerModal"
    v-bind:open="isVisible"
    v-bind:aria-hidden="!isVisible"
  >
    <section class="PomodoroTimerModal__content">
      <button 
        class="PomodoroSettingsSidebar__closer"
        v-on:click="toggleVisibility()"
      >
        <span aria-hidden="true">&times;</span>
        <span class="visuallyhidden">Close modal</span>
      </button>
      <header class="PomodoroTimerModal__header">
        <h2 class="PomodoroTimerModal__heading">
          Timer Shortcuts
        </h2>
      </header>
      <section class="PomodoroTimerModal__body">
        <PomodoroTimerModalTable/>
      </section>
    </section>
  </dialog>
</template>

<script>
import { eventBus } from '../main';
import PomodoroTimerModalTable from './PomodoroTimerModalTable';

export default {
  name: 'PomodoroTimerModal',
  components: {
    PomodoroTimerModalTable
  },
  data() {
    return {
      isVisible: false
    }
  },
  created() {
    eventBus.$on('p-timer-tools-modal-toggle', () =>  {
      this.toggleVisibility();
    });
    
    window.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 'escape' && this.isVisible) {
        this.toggleVisibility();
      }
    });
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/partials/variables/_palette';
@import '../assets/styles/partials/_mixins';

.PomodoroTimerModal {
  background: rgba(0, 0, 0, 0.8);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  &__content {
    background: $palette-background-secondary;
    border-radius: 5px;
    color: $palette-font-primary;
    height: 400px;
    left: 50%;
    padding: 2.5em 0.5em;
    position: fixed;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 300px;

    @include respond-to('tablet-min') {
      height: 600px;
      width: 600px;
    }
  }

  &__header {
    font-size: 0.8rem;
    text-align: center;

    @include respond-to('tablet-min') {
      font-size: 1.2rem;
    }
  }

  &__heading {
    padding: 0.5em;
  }
}
</style>