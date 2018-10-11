import Vue from 'vue';
import App from './App.vue';
import router from './router';
import WhatsForLunch from './views/WhatsForLunch.vue';

require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

Vue.config.productionTip = false;

let vue = new Vue({
  router,
  render: (h) => h(App),
  components : {
    'whats-for-lunch' : WhatsForLunch
  }
}).$mount('#app');
