import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '@/views/home';
import login from '@/views/login';
import signup from '@/views/signup';

Vue.use(VueRouter);

const routes = [
    home,
    login,
    signup,
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
});

export default router;
