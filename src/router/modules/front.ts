import type { NewRouteRecordRaw } from '@/interface'
const frontRouter: NewRouteRecordRaw[] = [
  {
    path: '/front/member/list',
    name: 'MemberList',
    component: () => import('@/views/front/member/MemberList.vue'),
    meta: {
      title: '會員管理',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-users',
      theme: 'member'
      // roles: ['member:r']
    }
  },
  {
    path: '/front/member/add',
    name: 'MemberAdd',
    component: () => import('@/views/front/member/MemberAdd.vue'),
    meta: {
      title: '會員新增',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'member'
      // roles: ['member:c']
    }
  },
  {
    path: '/front/member/edit/:id(\\S+)',
    name: 'MemberEdit',
    component: () => import('@/views/front/member/MemberEdit.vue'),
    meta: {
      title: '會員編輯',
      auth: true,
      hide: true,
      icon: 'pi pi-fw pi-users',
      theme: 'member'
      // roles: ['member:u']
    }
  }
]

export default frontRouter
