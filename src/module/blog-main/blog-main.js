import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import router from '../../router/router';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App },
  router
});

