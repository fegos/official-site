'use strict'

let DEFAULT_FORMAT = ':remote-addr - -' +
	' ":method :url HTTP/:http-version"' +
	' :status :content-length ":referrer"' +
	' ":user-agent"'
/**
 * Log requests with the given `options` or a `format` string.
 * Use for Koa v1
 *
 * Options:
 *
 *   - `format`        Format string, see below for tokens
 *   - `level`         A log4js levels instance. Supports also 'auto'
 *   - `nolog`         Object, conditions for not logging
 * Tokens:
 *
 *   - `:req[header]` ex: `:req[Accept]`
 *   - `:res[header]` ex: `:res[Content-Length]`
 *   - `:http-version`
 *   - `:response-time`
 *   - `:remote-addr`
 *   - `:date`
 *   - `:method`
 *   - `:url`
 *   - `:referrer`
 *   - `:user-agent`
 *   - `:status`
 *
 * @param {String|Function|Object} format or options
 * @return {Function}
 * @api public
 */

function getKoaLogger(options) {
	if (typeof options === 'object') {
		options = options || {}
	} else if (options) {
		options = {format: options}
	} else {
		options = {}
	}

	let level = options.level || 'INFO'

	let fmt = options.format || DEFAULT_FORMAT
	let nolog = options.nolog ? createNoLogConditions(options.nolog) : null
	return async function (ctx, next) {
		let thislogger = ctx.getLogger('httpLogger')
		// mount safety
		if (ctx.request._logging) {
			let res = await next()
			return res
		}
		// nologs
		// if (nolog && nolog.test(ctx.originalUrl)) return yield next

		let start = new Date()
		let writeHead = ctx.response.writeHead

		// flag as logging
		ctx.request._logging = true

		// proxy for statusCode.
		ctx.response.writeHead = function (code, headers) {
			ctx.response.writeHead = writeHead
			ctx.response.writeHead(code, headers)
			ctx.response.__statusCode = code
			ctx.response.__headers = headers || {}

			// status code response level handling
			if (options.level === 'auto') {
				level = 'INFO'
				if (code >= 500) {
					level = 'ERROR'
				} else if (code >= 300) {
					level = 'WARN'
				}
			} else {
				level = options.level || 'INFO'
			}
		}

		await next()
		// hook on end request to emit the log entry of the HTTP request.
		ctx.response.responseTime = new Date() - start
		// status code response level handling
		if (ctx.res.statusCode && options.level === 'auto') {
			level = 'INFO'
			if (ctx.res.statusCode >= 500) {
				level = 'ERROR'
			} else if (ctx.res.statusCode >= 300) {
				level = 'WARN'
			}
		}
		// if (thislogger.isLevelEnabled(level)) {
		let combinedTokens = assembleTokens(ctx, options.tokens || [])
		if (nolog !== null) {
			if (testNoLogConditions(combinedTokens, nolog)) {
				return
			}
		}
		if (typeof fmt === 'function') {
			let line = fmt(ctx, function (str) {
				return format(str, combinedTokens)
			})
			if (line) log(thislogger, level, line)
		} else {
			log(thislogger, level, format(fmt, combinedTokens))
		}
		// }
	}
}

function log(logger, level, msg) {
	if (logger && level && msg) {
		if (level === 'DEBUG') {
			logger.debug(msg)
		} else if (level === 'INFO') {
			logger.info(msg)
		} else if (level === 'WARN') {
			logger.warn(msg)
		} else if (level === 'ERROR') {
			logger.error(msg)
		} else if (level === 'FATAL') {
			logger.error(msg)
		}
	}
}

/**
 * Adds custom {token, replacement} objects to defaults, overwriting the defaults if any tokens clash
 *
 * @param  {Koa Context} ctx
 * @param  {Array} customTokens [
 *                      {
 *                        token: string-or-regexp,
 *                        replacement: string-or-replace-function,
 *                        content: a replace function with `ctx`
 *                      }
 *                 ]
 * @return {Array}
 */
function assembleTokens(ctx, customTokens) {
	let arrayUniqueTokens = function (array) {
		let a = array.concat()
		for (let i = 0; i < a.length; ++i) {
			for (let j = i + 1; j < a.length; ++j) {
				if (a[i].token === a[j].token) { // not === because token can be regexp object
					a.splice(j--, 1)
				}
			}
		}
		return a
	}
	let defaultTokens = []
	defaultTokens.push({token: ':url', replacement: ctx.originalUrl})
	defaultTokens.push({token: ':protocol', replacement: ctx.protocol})
	defaultTokens.push({token: ':hostname', replacement: ctx.hostname})
	defaultTokens.push({token: ':method', replacement: ctx.method})
	defaultTokens.push({
		token: ':status',
		replacement: ctx.response.status || ctx.response.__statusCode || ctx.res.statusCode
	})
	defaultTokens.push({token: ':response-time', replacement: ctx.response.responseTime})
	defaultTokens.push({token: ':date', replacement: new Date().toUTCString()})
	defaultTokens.push({token: ':referrer', replacement: ctx.headers.referer || ''})
	defaultTokens.push({
		token: ':http-version',
		replacement: ctx.req.httpVersionMajor + '.' + ctx.req.httpVersionMinor
	})
	defaultTokens.push({
		token: ':remote-addr',
		replacement: ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips ||
		(ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
	})
	defaultTokens.push({token: ':user-agent', replacement: ctx.headers['user-agent']})
	defaultTokens.push({
		token: ':content-length',
		replacement: (ctx.response._headers && ctx.response._headers['content-length']) ||
		(ctx.response.__headers && ctx.response.__headers['Content-Length']) ||
		ctx.response.length || '-'
	})
	defaultTokens.push({
		token: /:req\[([^\]]+)\]/g,
		replacement: function (_, field) {
			return ctx.headers[field.toLowerCase()]
		}
	})
	defaultTokens.push({
		token: /:res\[([^\]]+)\]/g,
		replacement: function (_, field) {
			return ctx.response._headers
				? (ctx.response._headers[field.toLowerCase()] || ctx.response.__headers[field])
				: (ctx.response.__headers && ctx.response.__headers[field])
		}
	})

	customTokens = customTokens.map(function (token) {
		if (token.content && typeof token.content === 'function') {
			token.replacement = token.content(ctx)
		}
		return token
	})
	return arrayUniqueTokens(customTokens.concat(defaultTokens))
}

/**
 * Return formatted log line.
 *
 * @param  {String} str
 * @param  {IncomingMessage} req
 * @param  {ServerResponse} res
 * @return {String}
 * @api private
 */

function format(str, tokens) {
	for (let i = 0; i < tokens.length; i++) {
		str = str.replace(tokens[i].token, tokens[i].replacement)
	}
	return str
}

/**
 * Return RegExp Object about nolog
 *
 * @param  {String} nolog
 * @return {RegExp}
 * @api private
 *
 * syntax
 *  1. String
 *   1.1 "\\.gif"
 *         NOT LOGGING http://example.com/hoge.gif and http://example.com/hoge.gif?fuga
 *         LOGGING http://example.com/hoge.agif
 *   1.2 in "\\.gif|\\.jpg$"
 *         NOT LOGGING http://example.com/hoge.gif and
 *           http://example.com/hoge.gif?fuga and http://example.com/hoge.jpg?fuga
 *         LOGGING http://example.com/hoge.agif,
 *           http://example.com/hoge.ajpg and http://example.com/hoge.jpg?hoge
 *   1.3 in "\\.(gif|jpe?g|png)$"
 *         NOT LOGGING http://example.com/hoge.gif and http://example.com/hoge.jpeg
 *         LOGGING http://example.com/hoge.gif?uid=2 and http://example.com/hoge.jpg?pid=3
 *  2. RegExp
 *   2.1 in /\.(gif|jpe?g|png)$/
 *         SAME AS 1.3
 *  3. Array
 *   3.1 ["\\.jpg$", "\\.png", "\\.gif"]
 *         SAME AS "\\.jpg|\\.png|\\.gif"
 */
function createNoLogCondition(nolog) {
	let regexp = null
	if (nolog) {
		if (nolog instanceof RegExp) {
			regexp = nolog
		}

		if (typeof nolog === 'string') {
			regexp = new RegExp(nolog)
		}

		if (Array.isArray(nolog)) {
			let regexpsAsStrings = nolog.map((o) => (o.source ? o.source : o)
			)
			regexp = new RegExp(regexpsAsStrings.join('|'))
		}
	}

	return regexp
}

/**
 *
 * @param {Object | Array} nolog
 *
 * ex:
 * {url:"\\.gif",status:200}
 *     NOT LOGGING http://example.com/home.gif ctx.res.status === 200
 *     LOGGING http://example.com/home.gif ctx.res.status === 404
 * @return {Object | Array} key: {String} tokens, value: {RegExp}
 *
 */
function createNoLogConditions(nolog) {
	if (typeof nolog !== 'object') {
		return null
	}
	if (Array.isArray(nolog)) {
		for (let i = 0; i < nolog.length; i++) {
			if (typeof nolog[i] === 'object') {
				for (let key in nolog[i]) {
					nolog[i][key] = createNoLogCondition(nolog[i][key])
				}
			}
		}
	} else {
		for (let key in nolog) {
			nolog[key] = createNoLogCondition(nolog[key])
		}
	}
	return nolog
}

function testNoLogConditions(assembleTokens, noLogConditions) {
	let tokensMap = {}
	for (let i = 0; i < assembleTokens.length; i++) {
		tokensMap[assembleTokens[i].token] = assembleTokens[i].replacement
	}
	let ret = false
	if (Array.isArray(noLogConditions)) {
		for (let j = 0; j < noLogConditions.length; j++) {
			if (checkNoLogConditons(tokensMap, noLogConditions[j])) {
				return true
			}
		}
	} else {
		ret = checkNoLogConditons(tokensMap, noLogConditions)
	}
	return ret
}

// check one of condition
function checkNoLogConditons(tokensMap, noLogCondition) {
	let ret = false
	for (let key in noLogCondition) {
		let token = ':' + key
		let tokenValue = tokensMap[token]
		let regex = noLogCondition[key]
		if (tokenValue && regex && !regex.test(tokenValue)) {
			return false
		}
		ret = true
	}
	return ret
}

module.exports = getKoaLogger
