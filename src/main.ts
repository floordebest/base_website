import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import '../index.css'
import HomeView from './views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About Us',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: HomeView
    }
  ]
})

createApp(App).use(router).use(createPinia()).mount('#app')
