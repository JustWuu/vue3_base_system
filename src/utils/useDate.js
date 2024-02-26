class ConvertDate {
  constructor() {}
  //把傳入的毫秒轉成年月日時
  convertDate(date) {
    const day = new Date(date)
    const time =
      day.getFullYear() +
      '/' +
      (day.getMonth() + 1) +
      '/' +
      day.getDate() +
      '(' +
      day.getHours() +
      ':' +
      day.getMinutes() +
      ':' +
      day.getSeconds() +
      ')'
    return time
  }
}

export { ConvertDate as default }
