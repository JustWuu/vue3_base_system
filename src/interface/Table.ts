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
  style?: string
  class?: string
}
export interface TypeItem {
  value: string
  severity: string
  text: string
}
/**
 * type 'Dropdown' | 'InputText'
 *
 * 輸入該參數後，會依照所設參數生成不同的filter
 *
 * options type為options時才需要輸入
 */
export interface Filter {
  type: string | undefined
  options?: Options[] | undefined
  placeholder: string
  class?: string
  field: string
}
export interface Options {
  value: string
  text: string
}
