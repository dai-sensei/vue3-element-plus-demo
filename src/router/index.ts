import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import InfinityLoad from '@/views/ui/InfinityLoad.vue';
import Table from '@/views/ui/Table.vue';
import Form from '@/views/ui/Form.vue';

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
  },
  {
    path: '/ui-sample/form',
    name: 'Form',
    component: Form
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
