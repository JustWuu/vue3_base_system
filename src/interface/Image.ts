/**
 * Image
 *
 * use: 該圖片的用途
 *
 */
export interface Image {
  url: string
  name: string
  type?: string
  size: Number
  fullPath: string
  created: string
  uploader?: string
  use: 'profile' | 'upload'
  state: 'enable' | 'disabled' | 'delete' | ''
}
