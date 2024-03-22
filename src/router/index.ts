import { createRouter, createWebHashHistory } from 'vue-router'
import { UserStore } from '@/stores'
import AppLayout from '@/layout/AppLayout.vue'
import type { User } from '@/interface'
import { UserObject } from '@/interface'

// router
import systemRouter from './modules/system'
import exampleRouter from './modules/example'
// import exampleSubmenuRouter from './modules/example-submenu'

// 在渲染的生命週期中，路由似乎比main還早
// 所以firebase需要在此做初始化
// firebase
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
const firebaseConfig = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
})
getAnalytics(firebaseConfig)

// 登入狀態監聽
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth()

// 路由編寫要參考範例寫法，否則layout選單可能出現錯誤
// meta中的them代表該頁面主題，例如path有/system/auth/list、/system/auth/add
// 這些都同屬auth主題，那在這些頁面時auth主題的選單都會判斷為點選中
// 因此them與path的命名要避免重複單字，不然會被判斷為點選中
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: AppLayout,
      meta: {
        title: '首頁',
        hide: false
      },
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: {
            title: 'Dashboard',
            auth: false,
            hide: false,
            icon: 'pi pi-fw pi-home',
            theme: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/ccc',
      component: AppLayout,
      meta: {
        title: '模擬前台設定',
        hide: false
      },
      children: []
    },
    {
      path: '/system',
      component: AppLayout,
      meta: {
        title: '系統',
        hide: false
      },
      children: [...systemRouter]
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

    // 放這邊沒layout
    // authRouter,
    {
      path: '/:404(.*)*',
      name: '404',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        title: '找不到頁面',
        auth: false,
        hide: true
      }
    },
    {
      path: '/:403(.*)*',
      name: '403',
      component: () => import('@/views/NotRole.vue'),
      meta: {
        title: '權限不足',
        auth: false,
        hide: true
      }
    }
  ]
})

// https://book.vue.tw/CH4/4-4-navigation-guards.html
// 路由守衛
router.beforeEach((to) => {
  const userStore = UserStore()
  document.title = `${to.meta.title} ▷One Bird WEB◁`
  if (!userStore.authOn) {
    onAuthStateChanged(auth, (res) => {
      if (res) {
        console.log(`sign in ${res.email}`)
        userStore.authOn = true
        import('@/api/firebase/database/user.js').then((module) => {
          const userFirebase = new module.default()
          userFirebase
            .get(res.uid)
            .then((user: User) => {
              userStore.user = user
              if (!comparisonRoles(to.meta.roles as string, userStore.user.roles)) {
                console.log('no role [1]')
                // router.push({ name: '403' })
              }
            })
            // 如果資料庫找不到，幫他創
            .catch((error) => {
              console.log(error)
              userFirebase.setUser(res, []).then(() => {
                // 創完重get一次
                userFirebase.get(res.uid).then((user: User) => {
                  userStore.user = user
                  if (!comparisonRoles(to.meta.roles as string, userStore.user.roles)) {
                    console.log('no role [3]')
                    // router.push({ name: '403' })
                  }
                })
              })
            })
        })
      } else {
        userStore.user = { ...UserObject }
        userStore.authOn = true
        if (to.meta.auth && userStore.user.uid === '') {
          console.log('please log in [1]')
          // router.push('/auth/login')
        }
      }
    })
  } else {
    if (to.meta.auth && userStore.user === null) {
      console.log('please log in [2]')
      // return { name: 'Login' }
    } else if (userStore.user !== null) {
      if (!comparisonRoles(to.meta.roles as string, userStore.user.roles)) {
        console.log('no role [2]')
        // return { name: '403' }
      }
    }
  }
})

function comparisonRoles(routerRoles: string, userRoles: string[]): boolean {
  if (!routerRoles) {
    return true
  }
  return userRoles.some((e) => routerRoles.includes(e))
}

export default router
