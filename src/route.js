import Vue from 'vue';
import VueRouter from 'vue-router';

import Top from './top';
import About from './about';
import Contact from './contact';
import Profile from './profile';

Vue.use(VueRouter);

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
