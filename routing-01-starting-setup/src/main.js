import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      component: () => import('./components/teams/TeamsList.vue'),
      alias: '/',
    },
    {
      path: '/users',
      component: () => import('./components/users/UsersList.vue'),
    },
    {
      path: '/teams/:teamId',
      component: () => import('./components/teams/TeamMembers.vue'),
      props: true,
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./components/nav/NotFound.vue'),
    },
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
