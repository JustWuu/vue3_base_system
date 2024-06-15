import { createRouter, createWebHashHistory } from 'vue-router'
import { UserStore, LoadingStore } from '@/stores'
import { UserObject } from '@/interface'

// router
import frontRouter from './modules/front'
import systemRouter from './modules/system'
import exampleRouter from './modules/example'
import authRouter from './modules/auth'

import accountRouter from './modules/account'
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
  appId: import.meta.env.VITE_APP_ID
})
getAnalytics(firebaseConfig)

// 登入狀態監聽
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth()

// ***********************************router start********************************************************
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
      component: () => import('@/layout/AppLayout.vue'),
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
            auth: true,
            hide: false,
            icon: 'pi pi-fw pi-home',
            theme: 'dashboard'
          }
        }
      ]
    },
    {
      path: '/ccc',
      component: () => import('@/layout/AppLayout.vue'),
      meta: {
        title: '前台設定',
        hide: false
      },
      children: [...frontRouter]
    },
    {
      path: '/system',
      component: () => import('@/layout/AppLayout.vue'),
      meta: {
        title: '系統',
        hide: false
      },
      children: [...systemRouter]
    },
    {
      path: '/account',
      component: () => import('@/layout/AppLayout.vue'),
      meta: {
        title: '帳戶',
        hide: true
      },
      children: [...accountRouter]
    },
    {
      path: '/example',
      component: () => import('@/layout/AppLayout.vue'),
      meta: {
        title: '範例',
        hide: false
      },
      children: [...exampleRouter]
    },
    // 放這邊沒layout
    {
      path: '/auth',
      meta: {
        title: '帳號',
        hide: true
      },
      children: [...authRouter]
    },
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
// ***********************************router end********************************************************

// https://book.vue.tw/CH4/4-4-navigation-guards.html
// 路由守衛
router.beforeEach((to) => {
  const userStore = UserStore()
  const loadingStore = LoadingStore()
  document.title = `${to.meta.title} - One System`
  if (!userStore.authOn) {
    loadingStore.appLoading = true
    onAuthStateChanged(auth, async (res) => {
      if (res) {
        console.log(`sign in ${res.email}`)
        userStore.authOn = true
        const userModule = await import('@/api/firebase/database/user.js')
        const roleModule = await import('@/api/firebase/database/role.js')
        const userFirebase = new userModule.default()
        const roleFirebase = new roleModule.default()
        try {
          // 取得帳號資料並儲存
          const user = await userFirebase.get(res.uid)
          userStore.user = user
          // 信箱驗證設定
          if (!user.emailVerified) {
            await userFirebase.update(res.uid, { emailVerified: res.emailVerified })
          }
          // 取得帳號權限並儲存
          const role = await roleFirebase.get(user.role.id)
          if (role.state === 'enable') {
            userStore.user.roles = role.roles
          }
          userStore.roleOn = true
          if (!comparisonRoles(to.meta.roles as string[], role.roles)) {
            console.log('no role [1]')
            router.push({ name: '403' })
          }
        } catch (error) {
          console.error(error)
          // 如果出錯且判斷無uid，代表資料庫沒有這個帳號
          // 代表他是會員帳號而不是後台帳號
          if (
            userStore.user.uid == '' &&
            (res.email == 'rty21785@gmail.com' || res.email == 'animestorehouse100@gmail.com')
          ) {
            console.log('偵測到指定帳號異常，自動執行系統初始化。')
            await userFirebase.setUser(res, UserObject)
          } else if (userStore.user.uid == '') {
            console.log('no auth [1]')
            router.push({ name: '403' })
          } else {
            userStore.roleOn = true
          }
        }
      } else {
        userStore.user = { ...UserObject }
        userStore.authOn = true
        if (to.meta.auth && userStore.user.uid === '') {
          console.log('please log in [1]')
          router.push('/auth/login')
        }
      }
      loadingStore.appLoading = false
    })
  } else {
    if (to.meta.auth && userStore.user.uid == '') {
      console.log('please log in [4]')
      return { name: 'AuthLogin' }
    } else if (userStore.user.uid !== '') {
      if (!comparisonRoles(to.meta.roles as string[], userStore.user.roles!)) {
        console.log('no role [4]')
        return { name: '403' }
      }
    }
  }
})

function comparisonRoles(routerRoles: string[], userRoles: string[]): boolean {
  if (!routerRoles) {
    return true
  }
  return userRoles.some((e) => routerRoles.includes(e))
}

export default router
