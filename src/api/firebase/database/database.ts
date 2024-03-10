import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  runTransaction
} from 'firebase/firestore'

const db = getFirestore()

class Database {
  /**
   * 集合(collection)的名稱
   */
  child: string
  constructor(child: string) {
    this.child = child
  }
  // 返回該資料夾下的該id資料
  async get(id: string) {
    try {
      const docSnap = await getDoc(doc(db, this.child, id))
      if (docSnap.exists()) {
        // console.log('Document data:', docSnap.data())
        return docSnap.data()
      } else {
        // console.log('No such document!')
        throw 'No such document!'
      }
    } catch (error) {
      console.error('Error set document: ', error)
      throw error
    }
  }
  // 返回整個資料夾組成的陣列，有完整的查詢功能
  // 該方法還有query、where一些資料庫查詢的功能，要用時需要import進來
  // const q = query(collection(db, "cities"), where("capital", "==", true))
  async array(id: string = '') {
    try {
      const querySnapshot = await getDocs(query(collection(db, `${this.child}/${id}`)))
      const array: object[] = []
      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          array.push(doc.data())
        }
      })
      return array
    } catch (error) {
      console.error('Error set document: ', error)
      throw error
    }
  }
  // 在該資料夾建立新資料，相同資料夾內的同id會被取代
  async set(id: string, params: object) {
    try {
      await setDoc(doc(db, this.child, id), params)
      console.log('Document set with ID: ', this.child, '/', id)
    } catch (error) {
      console.error('Error set document: ', error)
      throw error
    }
  }
  // 在該資料夾建立資料，取名為亂數
  async add(params: object, id = '') {
    try {
      const docRef = await addDoc(collection(db, `${this.child}/${id}/`), params)
      console.log('Document add with ID: ', docRef.id)
      return docRef.id
    } catch (error) {
      console.error('Error add document: ', error)
      throw error
    }
  }
  // 更新該資料夾資料
  async update(id: string, params: object) {
    try {
      await updateDoc(doc(db, this.child, id), { ...params, timestamp: serverTimestamp() })
      console.log('Document update with ID: ', this.child, '/', id)
    } catch (error) {
      console.error('Error update document: ', error)
      throw error
    }
  }
  // 使用transaction進行更新，批量寫入，操作只有都成功或都不應用，不會只有部分寫成功
  // 會先拉取原資料，確保資料不會有兩端一起更新一份資料問題
  // 目前尚未完整確認用途
  // 文件看下來功能應該是，執行時透過get取得資料庫最新資料
  // 之後再以這筆最新資料去進行操作
  // 還要再思考一下如何運用這功能...
  async transaction(id: string, params: object) {
    try {
      await runTransaction(db, async (transaction) => {
        const sfDoc = await transaction.get(doc(db, this.child, id))
        if (!sfDoc.exists()) {
          throw 'Document does not exist!'
        }
        const newPopulation = sfDoc.data().d + 1
        transaction.update(doc(db, this.child, id), { ...params, d: newPopulation })
      })
      console.log('Transaction successfully committed!')
    } catch (error) {
      console.log('Transaction failed: ', error)
    }
  }
  // 刪除資料夾資料
  async delete(id: string) {
    try {
      await deleteDoc(doc(db, this.child, id))
      console.log('Document delete with ID: ', this.child, '/', id)
    } catch (error) {
      console.error('Error delete document: ', error)
      throw error
    }
  }
  // //監聽資料夾，傳入callback給它，初始化及有變化時執行
  onValue(id: string, callback: Function) {
    console.log(id, callback)
    // console.log(`database onValue: ${this.child}/${id} start`)
    // onValue(ref(db, `${this.child}/` + id), (snapshot) => {
    //   console.log(`database onValue: ${this.child}/${id} update`)
    //   callback(snapshot.val())
    // })
  }

  // 批次寫入，writeBatch，暫不使用，原理如下
  // 可以撰寫多個CRUD，最後運行batch.commit()，一次發出
}

export { Database as default }
