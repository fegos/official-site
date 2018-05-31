/**
 * Created by swx on 2017/12/29.
 */
'use strict'
module.exports = options => {
  return async function (ctx, next) {
    if (!ctx.x_request_id) {
      ctx.x_request_id = process.pid + '-' + new Date().getTime()
    }
    await next()
  }
}
