import type { NewRouteRecordRaw } from '@/interface'
const authRouter: NewRouteRecordRaw[] = [
  {
    path: '/auth/login',
    name: 'AuthLogin',
    component: () => import('@/views/auth/AuthLogin.vue'),
    meta: {
      title: '帳號登入',
      auth: false,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'auth'
    }
  }
]

export default authRouter
