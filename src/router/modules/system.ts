import type { RouteRecordRaw } from 'vue-router'
type NewRouteRecordRaw = RouteRecordRaw & {
  url?: string
  target?: string
  class?: string
}
const systemRouter: NewRouteRecordRaw[] = [
  {
    path: '/system/user/list',
    name: 'AuthList',
    component: () => import('@/views/system/user/UserList.vue'),
    meta: {
      title: '帳號管理',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-users',
      theme: 'user',
      role: ['client']
    }
  },
  {
    path: '/system/user/add',
    name: 'AuthAdd',
    component: () => import('@/views/example/ExampleUniversal.vue'),
    meta: {
      title: '帳號新增',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'user',
      role: ['client']
    }
  },
  {
    path: '/system/user/edit',
    name: 'AuthEdit',
    component: () => import('@/views/example/ExampleUniversal.vue'),
    meta: {
      title: '帳號編輯',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'user',
      role: ['client']
    }
  },
  {
    path: '/system/role/list',
    name: 'RoleList',
    component: () => import('@/views/system/role/RoleList.vue'),
    meta: {
      title: '權限群組',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-sitemap',
      theme: 'role',
      role: ['client']
    }
  },
  {
    path: '/system/role/add',
    name: 'RoleAdd',
    component: () => import('@/views/example/ExampleUniversal.vue'),
    meta: {
      title: '權限新增',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-sitemap',
      theme: 'role',
      role: ['client']
    }
  },
  {
    path: '/system/role/edit',
    name: 'RoleEdit',
    component: () => import('@/views/example/ExampleUniversal.vue'),
    meta: {
      title: '權限編輯',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-sitemap',
      theme: 'role',
      role: ['client']
    }
  }
]

export default systemRouter
