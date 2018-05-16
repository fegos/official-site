'use strict'

const {app, assert} = require('egg-mock/bootstrap')

describe('test/app/controller/com.test.js', () => {
	it('should assert', function*() {
		const pkg = require('../../../package.json');
		assert(app.config.keys.startsWith(pkg.name));
	})
	it('should GET /testStatus', () => {
		return app.httpRequest()
			.get('/testStatus')
			.expect(302)
	})
})
