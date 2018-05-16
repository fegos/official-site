/**
 * Created by swx on 2017/12/29.
 */
const TAG = '[APP ERROR]'

module.exports = app => {
	app.beforeStart(async () => {
		// 应用会等待这个函数执行完成才启动
		app.on('error', function (err, ctx) {
			app.logger.error(TAG, err)
		})

		process.on('SIGINT', function () {
			console.info('SIGINT: exit')
			let mem = process.memoryUsage()
			let format = function (bytes) {
				return (bytes / 1024 / 1024).toFixed(2) + 'MB'
			}
			let now = new Date()
			app.logger.info(TAG, now.toLocaleString(), ' | pid: ', process.pid, ' | rss: ' + format(mem.rss) + ' | heapTotal: ' + format(mem.heapTotal) + ' | heapUsed: ' + format(mem.heapUsed))
			process.exit(0)
		})

		process.on('uncaughtException', function (err) {
			app.logger.error('process uncaughtException', err)
			if (app.config.env !== 'test') {
				app.logger.error(TAG, err)
				process.exit(1)
			}
		})
	})
}
