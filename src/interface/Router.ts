import type { RouteRecordRaw } from 'vue-router'
/**
 * 路由參數擴充
 */
export type NewRouteRecordRaw = RouteRecordRaw & {
  url?: string
  target?: string
  class?: string
  meta: Meta
}
export interface Meta {
  title: string
  auth: boolean
  hide: boolean
  icon?: string
  theme?: string
  roles?: string[]
}
