import type { NewRouteRecordRaw } from '@/interface'
const accountRouter: NewRouteRecordRaw[] = [
  {
    path: '/account/myaccount',
    name: 'MyAccount',
    component: () => import('@/views/account/MyAccount.vue'),
    meta: {
      title: '帳戶資料',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'account'
    }
  }
]

export default accountRouter
