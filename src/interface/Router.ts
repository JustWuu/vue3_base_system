import type { RouteRecordRaw } from 'vue-router'
export type NewRouteRecordRaw = RouteRecordRaw & {
  url?: string
  target?: string
  class?: string
}
