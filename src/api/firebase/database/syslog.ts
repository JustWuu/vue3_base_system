import Database from './database'

class SyslogFirebase extends Database {
  constructor() {
    super('syslog')
  }
}

export default SyslogFirebase
