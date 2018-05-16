/**
 * Created by swx on 2018/1/2.
 */
'use strict'
const koaLogger = require('./koaLogger')

let conditions = {url: '(checkappstatus\\.html|favicon\\.ico)$', status: 200}
let conds = [conditions, {}]

module.exports = options => {
	return koaLogger(Object.assign({}, options, {
		level: 'auto',
		format: ':x-request-id :remote-addr --> :url :method :status :response-time :content-length ":user-agent" ":referrer"',
		nolog: conds,
		tokens: [{
			token: ':x-request-id',
			content: (ctx) => {
				return ctx.x_request_id
			}
		}]
	}))
}
