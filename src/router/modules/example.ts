import type { RouteRecordRaw } from 'vue-router'
type NewRouteRecordRaw = RouteRecordRaw & {
  url?: string
  target?: string
  class?: string
}
const exampleRouter: NewRouteRecordRaw[] = [
  // 隱藏(hide測試)，不會出現在選單，可通過路由進入
  {
    path: '/example/hide',
    name: 'ExampleHide',
    component: () => import('@/views/pages/example/ExampleUniversal.vue'),
    meta: {
      title: '隱藏',
      auth: true,
      hide: true
    }
  },
  // CRUD
  {
    path: '/example/crud',
    name: 'CRUD',
    component: () => import('@/views/pages/example/ExampleCrud.vue'),
    meta: {
      title: 'CRUD測試',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-reply'
    }
  },
  // 權限
  {
    path: '/example/role',
    name: 'ExampleRole',
    component: () => import('@/views/pages/example/ExampleUniversal.vue'),
    meta: {
      title: '無權限禁止(需登入)',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-lock',
      role: ['client']
    }
  },
  // 需登入
  {
    path: '/example/auth',
    name: 'ExampleAuth',
    component: () => import('@/views/pages/example/ExampleUniversal.vue'),
    meta: {
      title: '無登入禁止',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-user'
    }
  },
  // 免登入
  {
    path: '/example/no-auth',
    name: 'ExampleNoauth',
    component: () => import('@/views/pages/example/ExampleUniversal.vue'),
    meta: {
      title: '無登入可進入',
      auth: false,
      hide: false,
      icon: 'pi pi-fw pi-user-minus'
    }
  },
  // 外部連結+class
  // 空path及component是必要的，在RouteRecordRaw中該值
  {
    path: '',
    name: 'URL',
    component: () => {},
    meta: {
      title: '外部連結+class',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-reply'
    },
    url: 'https://www.primefaces.org/primeblocks-vue',
    target: '_blank',
    class: 'text-orange-500'
  },
  // 多層展示
  {
    path: '',
    name: 'Example',
    meta: {
      title: '多層展示',
      auth: true,
      hide: false,
      icon: 'pi pi-fw pi-bookmark'
    },
    children: [
      {
        path: '',
        name: 'Example',
        meta: {
          title: '多層展示1.1',
          auth: true,
          hide: false,
          icon: 'pi pi-fw pi-bookmark'
        },
        children: [
          {
            path: '',
            name: 'Example',
            meta: {
              title: '多層展示1.2',
              auth: true,
              hide: false,
              icon: 'pi pi-fw pi-bookmark'
            },
            children: [
              {
                path: '/example/submenu',
                name: 'ExampleSubmenu',
                component: () => import('@/views/pages/example/ExampleSubmenu.vue'),
                meta: {
                  title: '多層展示1.3',
                  auth: true,
                  hide: false,
                  icon: 'pi pi-fw pi-bookmark'
                }
              }
            ]
          }
        ]
      }
    ]
  }
]

export default exampleRouter
