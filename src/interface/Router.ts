import type { RouteRecordRaw } from 'vue-router'
/**
 * 路由參數擴充
 */
export type NewRouteRecordRaw = RouteRecordRaw & {
  url?: string
  target?: string
  class?: string
}
