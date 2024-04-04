export interface Syslog {
  collection: string
  document: string
  methods: any
  timestamp: any
  useremail: any
  userip: any
  useruid: any
  state: 'enable' | 'disabled' | 'delete' | ''
}
/**
 * 系統操作紀錄
 */
export class SyslogClass {
  collection: string
  document: string
  methods: any
  timestamp: any
  useremail: any
  userip: any
  useruid: any
  state: string
  constructor(
    collection: string,
    document: string,
    methods: string,
    timestamp: number,
    useruid: string,
    useremail: string,
    userip: string,
    state: string
  ) {
    this.collection = collection
    this.document = document
    this.methods = methods
    this.timestamp = timestamp
    this.useruid = useruid
    this.useremail = useremail
    this.userip = userip
    this.state = state
  }
}
