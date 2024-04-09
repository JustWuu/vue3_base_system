import type { NewRouteRecordRaw } from '@/interface'
const systemRouter: NewRouteRecordRaw[] = [
  {
    path: '/system/user/list',
    name: 'UserList',
    component: () => import('@/views/system/user/UserList.vue'),
    meta: {
      title: '帳號管理',
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
  },
  {
    path: '/system/role/list',
    name: 'RoleList',
    component: () => import('@/views/system/role/RoleList.vue'),
    meta: {
      title: '權限管理',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-sitemap',
      theme: 'role',
      roles: ['role:r']
    }
  },
  {
    path: '/system/role/add',
    name: 'RoleAdd',
    component: () => import('@/views/system/role/RoleAdd.vue'),
    meta: {
      title: '權限新增',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-sitemap',
      theme: 'role',
      roles: ['role:c']
    }
  },
  {
    path: '/system/role/edit/:id(\\S+)',
    name: 'RoleEdit',
    component: () => import('@/views/system/role/RoleEdit.vue'),
    meta: {
      title: '權限編輯',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-sitemap',
      theme: 'role',
      roles: ['role:u']
    }
  },
  {
    path: '/system/syslog/list',
    name: 'SyslogList',
    component: () => import('@/views/system/syslog/SyslogList.vue'),
    meta: {
      title: '操作紀錄',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-wrench',
      theme: 'syslog',
      roles: ['syslog:r']
    }
  },
  {
    path: '/system/syslog/read/:id(\\S+)',
    name: 'SyslogRead',
    component: () => import('@/views/system/syslog/SyslogRead.vue'),
    meta: {
      title: '操作紀錄',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-wrench',
      theme: 'syslog',
      roles: ['syslog:r']
    }
  }
]

export default systemRouter
