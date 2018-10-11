import Vue from 'vue';
import App from './App.vue';
import router from './router';
import WhatsForLunch from './views/WhatsForLunch.vue';

// Import bootstrap
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

Vue.config.productionTip = false;

/**
 * Initialise VueJS
 */
const vue = new Vue({
  router,
  render: (h) => h(App),
  components : {
    'whats-for-lunch' : WhatsForLunch,
  },
}).$mount('#app');
