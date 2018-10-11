import Vue from 'vue';
import App from './App.vue';
import router from './router';
import WhatsForLunch from './views/WhatsForLunch.vue';

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
