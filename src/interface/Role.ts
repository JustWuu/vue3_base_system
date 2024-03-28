/**
 * 權限身分
 */
export interface Role {
  displayName: string
  roles: string[]
  id: string
  state: 'enable' | 'disabled' | 'delete' | ''
}
