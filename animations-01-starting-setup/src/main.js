import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/AllUsers.vue'),
    },
    {
      path: '/goals',
      component: () => import('@/pages/CourseGoals.vue'),
    },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then(() => {
  app.mount('#app');
});
