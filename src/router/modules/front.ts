import type { NewRouteRecordRaw } from '@/interface'
const frontRouter: NewRouteRecordRaw[] = [
  {
    path: '/system/user/list',
    name: 'UserList',
    component: () => import('@/views/system/user/UserList.vue'),
    meta: {
      title: '(帳號管理)',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-users',
      theme: 'user',
      roles: ['user:r']
    }
  },
  {
    path: '/system/user/add',
    name: 'UserAdd',
    component: () => import('@/views/system/user/UserAdd.vue'),
    meta: {
      title: '帳號新增',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'user',
      roles: ['user:c']
    }
  },
  {
    path: '/system/user/edit/:id(\\S+)',
    name: 'UserEdit',
    component: () => import('@/views/system/user/UserEdit.vue'),
    meta: {
      title: '帳號編輯',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'user',
      roles: ['user:u']
    }
  }
]

export default frontRouter
