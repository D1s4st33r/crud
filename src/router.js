/* eslint-disable no-undef */
import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import About from './components/AboutUs.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Crud from './components/Crud.vue'
import Products from './components/Products.vue'
import Carrito from './components/Carrito.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component:About,
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/crud',
      name: 'crud',
      component: Crud
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: Carrito
    },
    {
      path: '*',
      name: 'noFound',
      redirect: '/'
    }
  ],
});