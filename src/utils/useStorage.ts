// useStorage 不好用，沒純get的API，資料也無法覆蓋上一筆

class Storage {
  constructor() {}
  // LocalStorage，永久，手動清除才會消失
  setLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  // SessionStorage，頁面關閉則消失
  setSessionStorage(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  }
  // get
  getLocalStorage(key) {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data)
  }
  // get
  getSessionStorage(key) {
    const data = window.sessionStorage.getItem(key)
    return JSON.parse(data)
  }
  // removeLocalStorage
  removeLocalStorage(key) {
    window.localStorage.removeItem(key)
  }
  // clearLocalStorage
  clearLocalStorage() {
    window.localStorage.clear()
  }
}

export { Storage as default }
