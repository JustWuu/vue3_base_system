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
  },
  {
    path: '/auth/register',
    name: 'AuthRegister',
    component: () => import('@/views/auth/AuthRegister.vue'),
    meta: {
      title: '帳號註冊',
      auth: false,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'auth'
    }
  },
  {
    path: '/auth/forget',
    name: 'AuthForget',
    component: () => import('@/views/auth/AuthForget.vue'),
    meta: {
      title: '忘記密碼',
      auth: false,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'auth'
    }
  }
]

export default authRouter
