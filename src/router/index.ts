import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import InfinityLoad from '@/views/ui/InfinityLoad.vue';
import Table from '@/views/ui/Table.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ui-sample/infinity-load',
    name: 'InfinityLoad',
    component: InfinityLoad
  },
  {
    path: '/ui-sample/table',
    name: 'Table',
    component: Table
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
