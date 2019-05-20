import Vue from 'vue';
import App from './App.vue';

/*
  Apply global styles for the application
*/

require('./assets/styles/index.scss');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
