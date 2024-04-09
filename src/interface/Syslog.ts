export interface Syslog {
  collection: string
  document: string
  methods: any
  timestamp: number
  useremail: any
  userip: any
  useruid: any
  state: 'enable' | 'disabled' | 'delete' | ''
  id: string
}
/**
 * 系統操作紀錄
 */
export class SyslogClass implements Syslog {
  collection: string
  document: string
  methods: any
  timestamp: number
  useremail: any
  userip: any
  useruid: any
  state: 'enable' | 'disabled' | 'delete' | ''
  id: string
  constructor(
    collection: string,
    document: string,
    methods: string,
    timestamp: number,
    useruid: string,
    useremail: string,
    userip: string,
    state: 'enable' | 'disabled' | 'delete' | '',
    id: string
  ) {
    this.collection = collection
    this.document = document
    this.methods = methods
    this.timestamp = timestamp
    this.useruid = useruid
    this.useremail = useremail
    this.userip = userip
    this.state = state
    this.id = id
  }
}
