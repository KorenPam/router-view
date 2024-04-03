// history模式
import { createRouter, createWebHashHistory } from 'vue-router'

// 创建路由对象
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About/About.vue')
    },
    {
      path: '/todolist',
      component: () => import('@/views/Todolist/Todolist.vue')
    },
    {
      path: '/user',
      component: () => import('@/views/User/User.vue')
    },
    {
      path: '/',
      redirect: '/home' // 放在路由数组的开头
    }
  ]
})

export default router
