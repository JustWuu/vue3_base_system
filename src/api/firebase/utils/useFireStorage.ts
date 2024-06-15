import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { ImagesFirebase, Auth } from '@/api'
import { type Image } from '@/interface'
// firebase
const imagesFirebase = new ImagesFirebase()
const storage = getStorage()
const auth = new Auth()

const { user } = auth.getUser()

const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

class FireStorage {
  constructor() {}
  // 上傳圖片
  async uploadImage(file: File, use: 'profile' | 'upload' = 'upload') {
    const storageRef = ref(storage, `system/${file.name}`)
    return await uploadBytes(storageRef, file)
      .then(async (snapshot) => {
        console.log(snapshot.metadata.name, 'Uploaded a blob or file!')
        const image: Image = {
          url: `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/system%2F${snapshot.metadata.name}?alt=media`,
          name: snapshot.metadata.name,
          type: snapshot.metadata.contentType,
          size: snapshot.metadata.size,
          fullPath: snapshot.metadata.fullPath,
          created: snapshot.metadata.timeCreated,
          uploader: user.value.uid,
          use: use,
          state: 'enable'
        }
        await imagesFirebase.set(file.name, image)
        return image.url
      })
      .catch((error) => {
        throw error
      })
  }
  // 上傳大頭照
  async uploadProfilePhoto(file: File) {
    return this.uploadImage(file, 'profile')
      .then(async (res) => {
        const res_1 = await auth.update({ photoURL: res })
        console.log(res_1)
        return res_1
      })
      .catch((error) => {
        throw error
      })
  }
}

export { FireStorage as default }
