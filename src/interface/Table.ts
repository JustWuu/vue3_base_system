/**
 * type 'boolean' | 'tag' | 'date'
 *
 * 輸入該參數後，會依照所設參數生成不同的colums
 *
 * tag type為tag時才需要輸入
 */
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
