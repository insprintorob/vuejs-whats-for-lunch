import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import WhatsForLunch from './views/WhatsForLunch.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/whats-for-lunch',
      name: 'about',
      component: WhatsForLunch,
    },
  ],
});
