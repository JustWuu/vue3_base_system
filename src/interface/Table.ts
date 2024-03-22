export interface Columns {
  type?: string | undefined
  tag?: TypeItem[] | undefined
  field: string
  header: string
  sortable?: boolean
  headerStyle?: string
}
export interface TypeItem {
  value: string
  severity: string
  text: string
}
