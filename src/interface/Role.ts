export interface Role {
  displayName: string | null
  roles: string[]
  key: string[]
  state: 'enable' | 'disabled' | 'delete'
}
