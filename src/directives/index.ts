import role from './role'
import type { App } from 'vue'

const directives: any = {
  role
}

export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
