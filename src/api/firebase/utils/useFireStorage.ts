import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage'
import { StorageFirebase, Auth } from '@/api'
import { type Storage } from '@/interface'
import { ConvertDate } from '@/utils'
const convertDate = new ConvertDate()

// firebase
const storageFirebase = new StorageFirebase()
const storage = getStorage()
const auth = new Auth()

const { user } = auth.getUser()

const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

class FireStorage {
  constructor() {}
  // 上傳圖片
  async uploadStorage(file: File, methods: 'profile' | 'upload' = 'upload') {
    const storageRef = ref(storage, `system/${file.name}`)
    return await uploadBytes(storageRef, file)
      .then(async (snapshot) => {
        console.log(snapshot.metadata.name, 'Uploaded a blob or file!')
        const storage: Storage = {
          id: '',
          url: `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/system%2F${snapshot.metadata.name}?alt=media`,
          name: snapshot.metadata.name,
          type: snapshot.metadata.contentType,
          size: snapshot.metadata.size,
          fullPath: snapshot.metadata.fullPath,
          createdAt: convertDate.time(),
          uploaderuid: user.value.uid,
          uploaderemail: user.value.email,
          methods: methods,
          state: 'enable'
        }
        await storageFirebase.add(storage)
        return storage.url
      })
      .catch((error) => {
        throw error
      })
  }
  // 上傳圖片
  async deleteStorage(storageFile: Storage) {
    const storageRef = ref(storage, storageFile.fullPath)
    return await deleteObject(storageRef)
      .then(async () => {
        await storageFirebase.update(storageFile.id, {
          state: 'delete'
        })
        return `${storageFile.name} delete`
      })
      .catch((error) => {
        throw error
      })
  }
  // 上傳大頭照
  async uploadProfilePhoto(file: File) {
    return this.uploadStorage(file, 'profile')
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
