import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: () => import('./components/teams/TeamsList.vue'),
        footer: () => import('./components/teams/TeamsFooter.vue'),
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: () => import('./components/teams/TeamMembers.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: () => import('./components/users/UsersList.vue'),
        footer: () => import('./components/users/UsersFooter.vue'),
      },
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./components/nav/NotFound.vue'),
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

const app = createApp(App);

app.use(router);

app.mount('#app');
