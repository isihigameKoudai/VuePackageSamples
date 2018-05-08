import Vue from 'vue';
import VueRouter from 'vue-router';

import Top from './pages/top';
import About from './pages/about';
import Contact from './pages/contact';
import Profile from './pages/profile';

Vue.use(VueRouter);

//ルーティング
const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default new VueRouter({routes});
