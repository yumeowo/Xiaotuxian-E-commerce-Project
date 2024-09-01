// createRouter: 创建router实例对象
//createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import indexLogin from '@/views/Login/index-login.vue'
import indexLayout from '@/views/Layout/index-layout.vue'
import indexHome from '@/views/Home/index-home.vue'
import indexCategory from '@/views/Category/index-category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: indexLayout,
      children: [
        {
          path: '',
          component:indexHome
        },
        {
          path: 'category',
          component:indexCategory
        }
      ]
    },
    {
      path: '/login',
      component: indexLogin
    }
  ]
})

export default router