import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n'

/*
  Apply global styles for the application
*/

require('./assets/styles/index.scss');

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');