import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { ImagesFirebase, UserFirebase, Auth } from '@/api'
// firebase
const imagesFirebase = new ImagesFirebase()
const userFirebase = new UserFirebase()
const storage = getStorage()
const auth = new Auth()

const { user } = auth.getUser()

const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET

class FireStorage {
  constructor() {}
  //照片上傳後會將照片命名亂數物件後把詳細資料存入/images，並將該亂數物件名稱及圖片名稱存入上傳者的資料庫內
  //上傳圖片
  async upload(file: File) {
    const storageRef = ref(storage, `image/${file.name}`)
    return await uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log(snapshot.metadata.name, 'Uploaded a blob or file!')
        const image = {
          url: `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/images%2F${snapshot.metadata.name}?alt=media`,
          name: snapshot.metadata.name,
          type: snapshot.metadata.contentType,
          size: snapshot.metadata.size,
          fullPath: snapshot.metadata.fullPath,
          created: snapshot.metadata.timeCreated,
          uploader: user.value.uid
        }
        imagesFirebase.set(file.name, image).then((res) => {
          console.log(res)
          // userFirebase.set(`${user.value.uid}/images/${res}`, { name: image.name })
        })
        return true
      })
      .catch((error) => {
        throw error
      })
  }
  //上傳大頭照
  async uploadProfilePhoto(file: File) {
    const storageRef = ref(storage, `image/${file.name}`)
    await uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log(snapshot.metadata.name, 'Uploaded a blob or file!')
        const image = {
          url: `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/images%2F${snapshot.metadata.name}?alt=media`,
          name: snapshot.metadata.name,
          type: snapshot.metadata.contentType,
          size: snapshot.metadata.size,
          fullPath: snapshot.metadata.fullPath,
          created: snapshot.metadata.timeCreated,
          uploader: user.value.uid
        }
        imagesFirebase.set(file.name, image).then((res) => {
          console.log(res)
          // userFirebase.set(`${user.value.uid}/images/${res}`, { name: image.name })
          // auth.update({ ...user.value, photoURL: image.url })
        })
      })
      .catch((error) => {
        throw error
      })
  }
}

export { FireStorage as default }
