import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/home.vue'),
    },
    {
      path: '/channellist',
      name: 'channellist',
      component: () => import('@/views/ChannelList/channellist.vue'),
    },
    {
      path: '/my',
      name: 'my',
      component: () => import('@/views/My/my.vue'),
    },
    {
      path: '/player',
      name: 'player',
      component: () => import('@/views/Player/player.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search/search.vue'),
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
