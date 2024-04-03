import axios from 'axios'

class Ipify {
  url: string
  constructor() {
    this.url = 'https://api.ipify.org?format=json'
  }
  async get(): Promise<any> {
    try {
      const ipify = axios.create({
        baseURL: this.url
      })
      const ip = await ipify.get('/').then((response) => {
        return response.data
      })
      return ip
    } catch (error: any) {
      console.log(error)
      throw error
    }
  }
}

export default Ipify
