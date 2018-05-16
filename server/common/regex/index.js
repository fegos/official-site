/**
 * Created by swx on 2017/12/20.
 */
// param may be RegExp, String, Array
module.exports.convertRegex = function convertRegex(param) {
	if (param instanceof RegExp) {
		return param
	}

	if (typeof param === 'string') {
		return new RegExp(param)
	}

	if (Array.isArray(param) && param.length > 0) {
		let regexpsAsStrings = param.map((o) => (o.source ? o.source : o))
		return new RegExp(regexpsAsStrings.join('|'))
	}
	throw new TypeError('params must be string | array | regex')
}
