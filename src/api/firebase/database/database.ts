import { getDatabase, ref, set, child, get, update, onValue, remove, push } from 'firebase/database'
import { getFirestore, collection, doc, setDoc, addDoc, getDocs } from 'firebase/firestore'

const db = getFirestore()

// 第一層為collection第二層為doc
// doc是雙層結構，官方文件中稱為"文件"
// const alovelaceDocumentRef = doc(db, 'users', 'alovelace');
// collection是單層結構，官方文件中稱為"集合"，第二層會變亂數
// const usersCollectionRef = collection(db, 'users');

// const db = getDatabase();
// const dbRef = ref(getDatabase());

class Database {
  constructor(child) {
    this.child = child
  }
  //返回該資料夾下的該id資料
  async get(id) {
    return await get(child(dbRef, `${this.child}/` + id))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(`${this.child} database get ok`)
          return snapshot.val()
        } else {
          throw `查無資料`
        }
      })
      .catch((error) => {
        throw error
      })
  }
  //返回整個資料夾組成的陣列
  async array(folder = '') {
    return await get(child(dbRef, `${this.child}/${folder}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(`${this.child} database get array ok`)
          return snapshot.val()
        } else {
          throw `查無資料`
        }
      })
      .catch((error) => {
        throw error
      })
  }
  //在該資料夾建立新資料，相同資料夾內的同id會被取代
  async set(id, params) {
    try {
      const docRef = await setDoc(doc(db, this.child, id), params)
      console.log('Document written with ID: ', this.child)
    } catch (e) {
      console.error('Error adding document: ', e)
    }

    // await set(ref(db, `${this.child}/` + id), params).then(()=>{
    //     console.log(`${this.child} database set ok`)
    // })
    // .catch((error)=>{
    //     throw error;
    // });
  }
  //在該資料夾建立資料，取名為亂數
  // 要改成可以回傳亂數
  async keySet(params, type = '') {
    try {
      const docRef = await addDoc(collection(db, this.child), params)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    // const key = push(ref(db, `${this.child}/` )).key;
    // return await set(ref(db, `${this.child}/${type}/` + key), params).then(() => {
    //     console.log(`${this.child} database keySet ok`)
    //     return key
    // }).catch((error) => {
    //     throw error;
    // });
  }
  //更新該資料夾資料
  async update(id, params) {
    await update(ref(db, `${this.child}/` + id), params)
      .then(() => {
        console.log(`${this.child} database update ok`)
      })
      .catch((error) => {
        throw error
      })
  }
  //刪除資料夾資料
  async remove(id) {
    await remove(ref(db, `${this.child}/` + id))
      .then(() => {
        console.log(`${this.child} database remove ok`)
      })
      .catch((error) => {
        throw error
      })
  }
  //監聽資料夾，傳入callback給它，初始化及有變化時執行
  onValue(id, callback) {
    console.log(`database onValue: ${this.child}/${id} start`)
    onValue(ref(db, `${this.child}/` + id), (snapshot) => {
      console.log(`database onValue: ${this.child}/${id} update`)
      callback(snapshot.val())
    })
  }
}

export { Database as default }
