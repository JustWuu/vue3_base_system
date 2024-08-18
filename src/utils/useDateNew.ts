import moment from 'moment-timezone'
import { useEnv } from '@/hooks'

const { VITE_TIME_ZONE } = useEnv()

export function useDate() {
  return {
    /**
     * 回傳毫秒
     */
    time(): number {
      const timeZone = VITE_TIME_ZONE
      const date = moment.tz(new Date(), timeZone).valueOf()
      return date
    },
    /**
     * 回傳YYYY-MM-DD HH:mm:ss
     */
    date(): string {
      const timeZone = VITE_TIME_ZONE
      const date = moment.tz(new Date(), timeZone).format('YYYY-MM-DD HH:mm')
      return date
    },
    /**
     * 把傳入的毫秒轉成年月日
     * @param date - 傳入的毫秒數
     * @param isUTC - 是否維持+0時區
     * @returns 格式化後的日期字符串
     */
    convertDate(date: any, isUTC = false) {
      const d = new Date(date)
      if (isNaN(d.getTime()) || d.getTime() === 0) return null
      const year = d.getFullYear()
      const month = isUTC
        ? d.getUTCMonth() + 1 < 10
          ? '0' + (d.getUTCMonth() + 1)
          : d.getUTCMonth() + 1
        : d.getMonth() + 1 < 10
          ? '0' + (d.getMonth() + 1)
          : d.getMonth() + 1
      const day = isUTC
        ? d.getUTCDate() < 10
          ? '0' + d.getUTCDate()
          : d.getUTCDate()
        : d.getDate() < 10
          ? '0' + d.getDate()
          : d.getDate()

      return year + '/' + month + '/' + day
    },
    /**
     * 把傳入的毫秒轉成時
     * @param date - 傳入的毫秒數
     * @param isUTC - 是否維持+0時區
     * @returns 格式化後的時間字符串
     */
    convertTime(date: any, isUTC = false) {
      const d = new Date(date)
      if (isNaN(d.getTime()) || d.getTime() === 0) return null
      const hh = isUTC ? d.getUTCHours() : d.getHours()
      const mm = isUTC ? d.getUTCMinutes() : d.getMinutes()
      const formattedHH = hh < 10 ? '0' + hh : hh
      const formattedMM = mm < 10 ? '0' + mm : mm
      return formattedHH + ':' + formattedMM
    },
    /**
     * 把傳入的毫秒轉成年月日時
     * @param date - 傳入的毫秒數
     * @param isUTC - 是否維持+0時區
     * @returns 格式化後的日期時間字符串
     */
    convertDateTime(date: any, isUTC = false) {
      const d = new Date(date)
      if (isNaN(d.getTime()) || d.getTime() === 0) return null

      const year = d.getFullYear()
      const month = isUTC
        ? d.getUTCMonth() + 1 < 10
          ? '0' + (d.getUTCMonth() + 1)
          : d.getUTCMonth() + 1
        : d.getMonth() + 1 < 10
          ? '0' + (d.getMonth() + 1)
          : d.getMonth() + 1
      const day = isUTC
        ? d.getUTCDate() < 10
          ? '0' + d.getUTCDate()
          : d.getUTCDate()
        : d.getDate() < 10
          ? '0' + d.getDate()
          : d.getDate()
      const hh = isUTC
        ? d.getUTCHours() < 10
          ? '0' + d.getUTCHours()
          : d.getUTCHours()
        : d.getHours() < 10
          ? '0' + d.getHours()
          : d.getHours()
      const mm = isUTC
        ? d.getUTCMinutes() < 10
          ? '0' + d.getUTCMinutes()
          : d.getUTCMinutes()
        : d.getMinutes() < 10
          ? '0' + d.getMinutes()
          : d.getMinutes()

      return year + '/' + month + '/' + day + ' ' + hh + ':' + mm
    },
    /**
     * 依傳入的時間生成當日最小及最大的時分
     * @returns [start, end]
     */
    convertStartEnd(date: any) {
      const d = new Date(date)
      if (isNaN(d.getTime()) || d.getTime() === 0) return null
      const pad = (num: any) => num.toString().padStart(2, '0')
      const formattedDate = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
      return [`${formattedDate}T00:00:00`, `${formattedDate}T23:59:59`]
    },
    /**
     * 取得當月最小至最大日
     * @returns [start, end]
     */
    getThisMonthRange(): [Date, Date] {
      const d = new Date()
      const start = new Date(d.getFullYear(), d.getMonth(), 1)
      const end = new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59, 999)
      return [start, end]
    },
    /**
     * 取得今天或至今最小至最大日
     * @param offset - 傳入1，代表開始日回推一年，以此類推
     * @returns [start, end]
     */
    getThisDateRange(offset: number = 0): [Date, Date] {
      const now = new Date()
      let start: Date, end: Date
      if (offset === 0) {
        start = new Date(now.setHours(0, 0, 0, 0))
        end = new Date(now.setHours(23, 59, 59, 999))
      } else {
        start = new Date(now.setDate(now.getDate() - offset))
        end = new Date()
      }
      return [start, end]
    },
    /**
     * 取得今年最小至最大日
     * @param offset - 傳入1，代表開始日回推一年，以此類推
     * @returns [start, end]
     */
    getThisYearRange(offset: number = 0): [Date, Date] {
      const d = new Date()
      const year = d.getFullYear() - offset
      const start = new Date(year, 0, 1)
      const end = new Date(year, 11, 31, 23, 59, 59, 999)
      return [start, end]
    },
    /**
     * 組合年月日及時分
     */
    formatDateAndTime(dateString: any, timeString: any): string | null {
      const date = new Date(dateString)
      if (isNaN(date.getTime()) || date.getTime() === 0) return null
      const time = new Date(timeString)
      if (isNaN(time.getTime()) || time.getTime() === 0) return null

      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')

      const hours = String(time.getHours()).padStart(2, '0')
      const minutes = String(time.getMinutes()).padStart(2, '0')

      return `${year}-${month}-${day} ${hours}:${minutes}`
    },
    /**
     * 分離年月日及時分
     * @param isUTC - 是否維持+0時區
     */
    parseDateTime(dateTimeString: string | null, isUTC: boolean = false): { date: any; time: any } {
      if (dateTimeString === null) return { date: '', time: '' }
      const dateTime = new Date(dateTimeString!)

      const year = dateTime.getUTCFullYear()
      const month = dateTime.getUTCMonth()
      const day = dateTime.getUTCDate()

      const hours = dateTime.getUTCHours()
      const minutes = dateTime.getUTCMinutes()

      let date: Date
      let time: Date

      if (isUTC) {
        date = new Date(Date.UTC(year, month, day))
        time = new Date(Date.UTC(year, month, day, hours, minutes))
      } else {
        date = new Date(year, month, day)
        time = new Date(year, month, day, hours, minutes)
      }

      return { date, time }
    }
  }
}
