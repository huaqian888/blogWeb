const route = [
    {
        path: '/',
        name: 'root',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        children: [],
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog/index.vue'),
        children: [],
    },
    {
        path: '/messageBoard',
        name: 'messageBoard',
        component: () => import('@/views/messageBoard/index.vue'),
        children: [],
    },
    {
        path: '/talktalk',
        name: 'talktalk',
        component: () => import('@/views/talktalk/index.vue'),
        children: [],
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('@/views/statistics/index.vue'),
      children: [],
  },
];

export default route;
