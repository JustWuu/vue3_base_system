import { createRouter, createWebHashHistory } from 'vue-router'
import { UserProfileStores } from '@/stores/userProfile'
import AppLayout from '@/layout/AppLayout.vue'

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
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      meta: {
        title: '首頁',
        hide: false
      },
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: {
            title: 'Dashboard',
            auth: false,
            hide: false,
            icon: 'pi pi-fw pi-home'
          }
        }
      ]
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
    // {
    //   path: '/system',
    //   component: AppLayout,
    //   meta: {
    //     title: '設定',
    //     hide: false
    //   },
    //   children: [userRouter]
    // },

    // 放這邊沒layout
    // authRouter,
    {
      path: '/:404(.*)*',
      name: '404',
      component: () => import('@/views/pages/NotFound.vue'),
      meta: {
        title: '找不到頁面',
        auth: false,
        hide: true
      }
    },
    {
      path: '/:403(.*)*',
      name: '403',
      component: () => import('@/views/pages/NotRole.vue'),
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
  const userProfileStores = UserProfileStores()
  // 如果auth未啟動，就先啟動
  document.title = `${to.meta.title} ▷One Bird WEB◁`
  if (!userProfileStores.authOn) {
    // 在onAuthStateChanged的函式內已經不是router了
    // 所以必須使用router的功能去push新頁面，不能直接return路由名稱
    onAuthStateChanged(auth, (res) => {
      if (res) {
        userProfileStores.user = res
        console.log(`sign in ${res.email}`)
        userProfileStores.authOn = true
        if (res.email === null && res.displayName === null) {
          userProfileStores.user.displayName = '訪客'
        } else if (res.email !== null && res.displayName === null) {
          userProfileStores.user.displayName = res.email
        }
        // 引入資料庫，在登入的時候就把帳戶data存到store
        import('@/api/firebase/database/user.js').then((module) => {
          const userFirebase = new module.default()
          userFirebase.get(`${res.uid}/profile`).then((user) => {
            // user是資料庫，res是auth的資料
            // 有相同的資料時要以auth的資料為主，所以res放後面
            userProfileStores.user = { ...user, ...res }

            // 判斷不是訪客卻沒有一般權限的帳戶(剛從訪客升級為一般的用戶)
            // 這邊不會幫存回資料庫，要等用戶有進行儲存相關操作才會存
            if (!userProfileStores.user.isAnonymous) {
              if (userProfileStores.user.role.indexOf('client') <= -1) {
                userProfileStores.user.role.push('client')
              }
            }
            // 判斷有無認證信箱
            // 同訪客，不會自動存回
            if (userProfileStores.user.emailVerified) {
              if (userProfileStores.user.role.indexOf('verify') <= -1) {
                userProfileStores.user.role.push('verify')
              }
            }
            // 有登入，判斷權限
            if (!comparisonRole(to.meta.role as string, userProfileStores.user.role)) {
              console.log('no role')
              router.push({ name: '403' })
            }
          })
        })
      } else {
        userProfileStores.user = null
        userProfileStores.authOn = true
        // 沒登入，送回登入
        // 判斷權限的前置是要有登入，所以這裡擋沒登入的就好
        if (to.meta.auth && userProfileStores.user === null) {
          console.log('please log in')
          // router.push('/auth/login')
        }
      }
    })
  } else {
    // 頁面要求登入 & 用戶沒登入 & 用戶權限與頁面權限不相等
    if (to.meta.auth && userProfileStores.user === null) {
      console.log('please log in')
      // return { name: 'Login' }
    } else if (userProfileStores.user !== null) {
      if (!comparisonRole(to.meta.role as string, userProfileStores.user.role)) {
        console.log('no role')
        // return { name: '403' }
      }
    }
  }
})

// userRole只要有一個權限符合routerRole，就可以進入
// 會先判斷該頁面是否有設權限，無則直接通過
function comparisonRole(routerRole: string, userRole: string[]) {
  if (routerRole == undefined) {
    return true
  }
  let result = userRole.some((e) => {
    return routerRole.indexOf(e) > -1
  })
  return result
}

export default router
