import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams',
      component: () => import('./components/teams/TeamsList.vue'),
    },
    {
      path: '/users',
      component: () => import('./components/users/UsersList.vue'),
    },
    {
      path: '/teams/:teamId',
      component: () => import('./components/teams/TeamMembers.vue'),
    }
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
