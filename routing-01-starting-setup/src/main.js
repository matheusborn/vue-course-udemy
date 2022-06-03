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
      beforeEnter: (to, from, next) => {
        console.log('users beforeEnter', to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./components/nav/NotFound.vue'),
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach', to, from);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
