/**
 * Created by swx on 2018/1/3.
 */
'use strict'

const SFTPIP = Symbol('Application#sftp#ip')
const regexUtil = require('../../common/regex')

module.exports = {
	// sftp ip白名单，单例，只会生成一次
	get sftpIp() {
		if (!this[SFTPIP]) {
			this[SFTPIP] = regexUtil.convertRegex(this.config.fego.sftp.whiteList)
		}
		return this[SFTPIP]
	}
}
