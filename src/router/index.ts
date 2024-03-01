import { createRouter, createWebHashHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

import exampleRouter from './modules/example'
// import exampleSubmenuRouter from './modules/example-submenu'

// 路由編寫要參考範例寫法，否則layout選單可能出現錯誤

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      meta: {
        title: '首頁',
        hide: false
      },
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: {
            title: 'Dashboard',
            auth: false,
            hide: false,
            icon: 'pi pi-fw pi-home'
          }
        }
      ]
    },
    {
      path: '/example',
      component: AppLayout,
      meta: {
        title: '範例',
        hide: false
      },
      children: [...exampleRouter]
    },
    // {
    //   path: '/system',
    //   component: AppLayout,
    //   meta: {
    //     title: '設定',
    //     hide: false
    //   },
    //   children: [userRouter]
    // },

    // 放這邊沒layout
    // authRouter,
    {
      path: '/:404(.*)*',
      name: '404',
      component: () => import('@/views/pages/NotFound.vue'),
      meta: {
        title: '找不到頁面',
        auth: false,
        hide: true
      }
    },
    {
      path: '/:403(.*)*',
      name: '403',
      component: () => import('@/views/pages/NotRole.vue'),
      meta: {
        title: '權限不足',
        auth: false,
        hide: true
      }
    }
  ]
})

export default router
