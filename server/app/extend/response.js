/**
 * Created by swx on 2018/2/1.
 */
'use strict'
const OK = 200
module.exports = {
  // 格式化body
  // 支持形式:
  // format(200) => {code:200}
  // format(200,'success') =>{code:200,msg:'success'}
  // format(200,'ok',{count:3})
  // format('ok',{})
  // format({})
  // format(401,{user:'jack'}) => {code:401,data:{user:''jack}}
  // format('ok') => {code:200,msg:'ok'}
  format(code, msg, data) {
    let content = {}
    if (data) {
      // 三个参数都有
      content.data = data
      content.msg = msg
      if (!isNaN(code)) {
        content.code = +code
      } else {
        content.code = OK
      }
    } else if (msg) {
      // 两个参数
      if (!isNaN(code)) {
        content.code = +code
      } else {
        if (typeof code === 'string') {
          content.msg = code
        } else {
          content.data = code
        }
        content.code = OK
      }
      if (typeof msg === 'string') {
        content.msg = msg
      } else {
        content.data = msg
      }
    } else if (code) {
      // 一个参数
      if (!isNaN(code)) {
        content.code = code
      } else {
        if (typeof code === 'string') {
          content.msg = code
        } else {
          content.data = code
        }
        content.code = OK
      }
    } else {
      // 没有参数
      throw new Error('no params found')
    }
    return content
  }
}
