import * as path from 'path'
export default {
  key_group: '321055482556974100',
  key_id: 'uRzAyG9bgQvytCRLsQXFPw==',
  secret: 'jO2GpFpDdjHPkHCt/KDNlLwl1eF+e3LmCld+DVGvtHY=',
  logCon: {
    appenders: {
      console: { type: 'stdout' },
      request: { type: 'dateFile', filename: path.resolve(__dirname, '../logs/request'), alwaysIncludePattern: true, pattern: '-yyyy-MM-dd.log', daysToKeep: 7},
      response: { type: 'dateFile', filename: path.resolve(__dirname, '../logs/response'), alwaysIncludePattern: true, pattern: '-yyyy-MM-dd.log', daysToKeep: 7}
    },
    categories: {
      default: { appenders: ['console', 'request', 'response'], level: 'info'},
      request: { appenders: ['request'], level: 'info'},
      response: { appenders: ['response'], level: 'info'}
    }
  }
}