/**
 * Created by swx on 2018/1/31.
 * 用来格式化body的样式
 */
'use strict'
const TAG = '[BODYFOMAT]'
const creatError = require('http-errors')
function isApiRequest(path) {
	return path && (path.indexOf('/api') === 0)
}
module.exports = options => {
	return async function (ctx, next) {
		try {
			await next()
			// 不处理非api请求
			if (!isApiRequest(ctx.path)) {
				return
			}
			let body = ctx.body
			let content = {}
			if (body) {
				let {code, msg, data} = body
				if (code || msg || data) {
					// 已经格式化
					if (code) {
						content.retcode = code
					}
					if (msg) {
						content.retdesc = msg
					}
					if (data) {
						content.data = data
					}
				} else {
					if (typeof body === 'string') {
						content.retdesc = body
					} else {
						content.data = body
					}
				}
				ctx.body = content
			}
		} catch (ex) {
			if (isApiRequest(ctx.path) && ex instanceof creatError.HttpError) {
				let status = +ex.status
				if (status > 500 && status < 600) {
					ctx.logger.error(TAG, ctx.x_request_id, ex)
				}
				ctx.status = status
			} else {
				throw ex
			}
		}
	}
}
