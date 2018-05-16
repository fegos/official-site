/**
 * Created by swx on 2018/1/2.
 */
'use strict'
const Controller = require('egg').Controller
const rootDir = 'nfop'
// const TAG = '[FILECTL]'

function checkFileName(fileName) {
	// return fileName === undefined || /^([^<>\\/|:"*?.]+([\\/][^<>\\/|:"*?.]+)*)+\.?\w+$/.test(fileName);
	return fileName === undefined || /^([/]?[^<>\\|/:"*?,.]+)+\.?\w+$/.test(fileName)
}

// const upload_whiteList = regexUtil.convertRegex(config.sftp.whiteList);

function getRemoteIps(ctx) {
	ctx = ctx || {}
	let ips = ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips || ''
	if (Array.isArray(ips)) {
		ips = ips.join('|')
	}
	return ips
}

class PageMakerController extends Controller {
	async upload() {
		const {ctx, service} = this
		let log = ctx.logger
		const TAG = '[UPLOAD]'
		let fields = ctx.request.body.fields || {}
		let fullName = fields['filename'] || ctx.request.query['filename']

		log.debug(TAG, ctx.x_request_id, 'enter upload')
		log.debug(TAG, `${ctx.x_request_id} file name: ${fullName}`)

		let ips = getRemoteIps(ctx)
		let whiteList = ctx.app.sftpIp
		if (whiteList && !whiteList.test(ips)) {
			ctx.status = 403
			return
		}

		if (fullName && !checkFileName(fullName)) {
			log.warn(TAG, ` ${ctx.x_request_id},  file name: ${fullName}`)
			ctx.body = ctx.response.format(6001, `${fullName} filename invalid`)
			return
		}
		if (fullName && fullName.indexOf('/') === 0) {
			fullName = fullName.slice(1)
		}
		let files = ctx.request.body.files || {}
		const file = files['file']
		if (file === undefined) {
			log.warn(TAG, `${ctx.x_request_id}, no file found`)
			ctx.body = ctx.response.format(6002, 'no file found')
			return
		}
		try {
			let fileName = fullName || file.name
			if (fileName.indexOf(rootDir) !== 0) {
				fileName = rootDir + '/' + fileName
			}
			log.debug(TAG, `fileName: ${fileName}`)
			await service.sftp.upload(file, fileName)
			ctx.body = 'upload file success'
		} catch (e) {
			log.error(TAG, ctx.x_request_id, e)
			ctx.body = ctx.response.format(6003, 'upload failed')
		}
		log.debug(ctx.x_request_id, 'leave upload')
	}
}

module.exports = PageMakerController
