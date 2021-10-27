import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import UserDetails from '@/views/UserDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { 
    path: '/users/:id',
    name: 'user-details', 
    component: UserDetails,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
