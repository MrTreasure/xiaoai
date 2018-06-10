import * as path from 'path'
export default {
  logCon: {
    appenders: {
      console: { type: 'stdout' },
      request: { type: 'dateFile', filename: path.resolve(__dirname, '../logs/request'), alwaysIncludePattern: true, pattern: '-yyyy-MM-dd.log', daysToKeep: 7},
      response: { type: 'dateFile', filename: path.resolve(__dirname, '../logs/response'), alwaysIncludePattern: true, pattern: '-yyyy-MM-dd.log', daysToKeep: 7}
    },
    categories: {
      default: { appenders: ['console'], level: 'info'},
      request: { appenders: ['request'], level: 'info'},
      response: { appenders: ['response'], level: 'info'}
    }
  }
}