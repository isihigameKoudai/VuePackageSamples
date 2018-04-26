import 'babel-polyfill';

import Vue from 'vue';
import Vuex from 'vuex';

import App from './App.vue';
import store from './store';
import router from './route';

Vue.use(Vuex);

new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
});
