import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: {
        default: () => import('./pages/TeamsList.vue'),
        footer: () => import('./pages/TeamsFooter.vue'),
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
        default: () => import('./pages/UsersList.vue'),
        footer: () => import('./pages/UsersFooter.vue'),
      },
      beforeEnter: (to, from, next) => {
        console.log('users beforeEnter', to, from);
        next();
      },
    },
    {
      path: '/:notFound(.*)',
      component: () => import('./pages/NotFound.vue'),
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
  if (to.meta.needsAuth) {
    console.log('Needs Auth');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  next();
});

router.afterEach((to, from) => {
  console.log('Global afterEach', to, from);
  //sending analytics data, log to server
});

export default router;
