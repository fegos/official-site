function json(result) {
	// 兼容各项目组的风格
	let code = result.retcode || result.retCode || result.code
	let desc = result.retdesc || result.retDesc || result.msg
	let data = result.data || {}
	// 统一转成字符串
	code = '' + code
	if (code !== '200') {
		return Promise.reject({
			// 业务异常
			type: 'biz',
			code: code,
			data: data,
			msg: `接口异常(${code}), ${desc}`
		})
	}
	// console.log('Fetch成功', rs, this);
	// 正常，则直接返回数据对象
	return data
}

export default {
	json
}
