import { UserStore } from '@/stores'
import type { DirectiveBinding } from 'vue'
import { watchEffect } from 'vue'

interface ElType extends HTMLElement {
  parentNode: any
  disabled: boolean
}

export default {
  mounted(el: ElType, binding: DirectiveBinding) {
    const userStore = UserStore()
    const { value } = binding
    watchEffect(() => {
      // 4/11，若沒有權限，會短暫看到後才消失
      // 可能是role尚未取得所以預設顯示之後才判斷完成
      // 需要處理一下
      // 等auth資料取得後再取得資料
      if (userStore.roleOn) {
        const roles = userStore.user.roles!
        if (value && value instanceof Array && value.length > 0) {
          const requiredRoles = value
          const hasRole = roles.some((role) => {
            return requiredRoles.includes(role)
          })
          // 如果沒有這個權限，就移除整個 HTML 節點
          if (!hasRole) {
            el.parentNode && el.parentNode.removeChild(el)
          }
        } else {
          throw new Error('error')
        }
      }
    })
  }
}
