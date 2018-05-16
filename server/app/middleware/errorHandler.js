/**
 * Created by swx on 2017/12/29.
 */

const TAG = '[ERRHANDLER]'
function isApiRequest(path) {
	return path && (path.indexOf('/api') === 0)
}
module.exports = options => {
	return async function (ctx, next) {
		try {
			await next()
		} catch (e) {
			ctx.logger.error(TAG, ctx.x_request_id, e)
			ctx.status = 500
			if (isApiRequest(ctx.originalUrl)) {
				ctx.body = {
					retcode: 500,
					retdesc: 'Server Error'
				}
			}
		}
	}
}
