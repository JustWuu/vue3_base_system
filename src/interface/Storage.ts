/**
 * Storage
 */
export interface Storage {
  id: string
  url: string
  name: string
  type?: string
  size: number
  fullPath: string
  createdAt: number
  created?: number
  uploaderuid?: string
  uploaderemail?: string
  methods: 'profile' | 'upload'
  state: 'enable' | 'disabled' | 'delete' | ''
}

export const StorageObject: Storage = {
  id: '',
  url: '',
  name: '',
  type: '',
  size: 0,
  fullPath: '',
  createdAt: 0,
  created: 0,
  uploaderuid: '',
  uploaderemail: '',
  methods: 'upload',
  state: 'enable'
}
