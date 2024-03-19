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
  runTransaction,
  onSnapshot
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
  // 返回該collection下的該doc資料
  async get(id: string): Promise<any> {
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
  // 返回整個collection下的doc組成的陣列，有完整的查詢功能
  // 該方法還有query、where一些資料庫查詢的功能，要用時需要import進來
  // const q = query(collection(db, "cities"), where("capital", "==", true))
  async array(id: string = ''): Promise<any> {
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
  // 在該doc建立新資料，相同doc內的同id會被取代
  async set(id: string, params: object): Promise<any> {
    try {
      await setDoc(doc(db, this.child, id), params)
      console.log('Document set with ID: ', this.child, '/', id)
    } catch (error) {
      console.error('Error set document: ', error)
      throw error
    }
  }
  // 在該doc建立資料，取名為亂數
  async add(params: object, id = ''): Promise<any> {
    try {
      const docRef = await addDoc(collection(db, `${this.child}/${id}/`), params)
      console.log('Document add with ID: ', docRef.id)
      return docRef.id
    } catch (error) {
      console.error('Error add document: ', error)
      throw error
    }
  }
  // 更新該doc資料
  async update(id: string, params: object): Promise<any> {
    try {
      await updateDoc(doc(db, this.child, id), { ...params, timestamp: serverTimestamp() })
      console.log('Document update with ID: ', this.child, '/', id)
    } catch (error) {
      console.error('Error update document: ', error)
      throw error
    }
  }
  // 刪除doc
  async delete(id: string): Promise<any> {
    try {
      await deleteDoc(doc(db, this.child, id))
      console.log('Document delete with ID: ', this.child, '/', id)
    } catch (error) {
      console.error('Error delete document: ', error)
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
  // 以下兩種監聽都是僅執行不停止，因為停止需要呼叫原函式
  // 在這邊沒用宣告所以沒辦法再去從新呼叫原函式
  // 監聽doc，傳入callback給它，初始化及有變化時執行
  onSnapshot(id: string, callback: Function) {
    console.log(`onSnapshot: ${this.child}/${id} start`)
    onSnapshot(doc(db, this.child, id), (snapshot) => {
      console.log(snapshot)
      // 本地進行update時也會被此監聽到，但是會處於Local狀態(代表未寫入資料庫)
      // 轉變為Server時代表寫入完成
      // const source = snapshot.metadata.hasPendingWrites ? 'Local' : 'Server'
      // console.log(source, ' data: ', snapshot.data())
      //
      console.log(`${this.child}/${id} update, Current data:${snapshot.data()}`)
      callback(snapshot.data())
    })
  }
  // 監聽整個collection，傳入callback給它，初始化及有變化時執行
  // 大至collection增加新的doc、小至doc中一個欄位更新，都會觸發回傳
  arrayOnSnapshot(callback: Function, id: string = '') {
    console.log(`onSnapshot: ${this.child}/${id} start`)
    onSnapshot(query(collection(db, `${this.child}/${id}`)), (querySnapshot) => {
      const array: object[] = []
      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          array.push(doc.data())
        }
      })
      console.log(`${this.child}/${id} update, Current data:${array}`)
      callback(array)
    })
  }
  // 批次寫入，writeBatch，暫不使用，原理如下
  // 可以撰寫多個CRUD，最後運行batch.commit()，一次發出
}

export { Database as default }
