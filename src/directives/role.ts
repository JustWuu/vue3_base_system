import { UserStore } from '@/stores'
import type { DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
  parentNode: any
  disabled: boolean
}

export default {
  mounted(el: ElType, binding: DirectiveBinding) {
    const userStore = UserStore()
    const { value } = binding
    // 這邊做定時是因為在生命週期中，這裡會比roles取得還快，導致判斷一直為false
    setTimeout(() => {
      const roles = userStore.user.roles
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
    }, 500)
  }
}
