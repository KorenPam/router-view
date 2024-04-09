import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView/HomeView.vue'),
      redirect: '/findview',
      children: [
        {
          path: '/findview',
          component: () => import('@/views/FindView/FindView.vue')
        },
        {
          path: '/channelview',
          component: () => import('@/views/ChannelView/ChannelView.vue')
        },
        {
          path: '/myview',
          component: () => import('@/views/MyView/MyView.vue')
        }
      ]
    },
    {
      path: '/player',
      component: () => import('@/views/PlayerView/PlayerView.vue')
    }
  ]
})

export default router
