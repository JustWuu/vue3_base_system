import Request from '@/api/axios/axios-instance'

class ExampleRequest extends Request {
  constructor() {
    super('example')
  }
  /**get範本 */
  async getExampleList(page: number): Promise<any> {
    const paging = {
      currentPage: page,
      perPage: 5
    }
    try {
      const snapshot = await this.get('list', paging)
      const dataList = snapshot.dataList
      return {
        dataList,
        paging: snapshot.paging
      }
    } catch (error: any) {
      throw `${error.message}`
    }
  }
}

export default ExampleRequest
