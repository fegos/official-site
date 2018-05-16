import React, { Component } from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { matchRoutes } from 'react-router-config'
import Router from 'Router'
import Seo from 'Seo'
import URL from 'URL'
import Frame from 'src/frame'
import routes from 'src/sys/route'

const initialProps = window.__INITIAL_PROPS__ || {}
const _DEBUG_ = process.env.NODE_ENV === 'development'

class App extends Component {
	render() {
		return (
			<BrowserRouter forceRefresh={!window.history.pushState}>
				<Frame>
					<Router {...this.props} />
				</Frame>
			</BrowserRouter>
		)
	}
}

export default {
	init: function () {
		let { pathname } = window.location
		let curRoute = matchRoutes(routes, pathname)
			.filter(route => route.match.isExact)
			.map(route => route.route)[0]
		if (curRoute && curRoute.component) {
			if (curRoute.component.prototype instanceof Component) {
				this.render(curRoute)
			} else {
				curRoute.component().then(mod => {
					curRoute.component = mod.default ? mod.default : mod
					this.render(curRoute)
				})
			}
		} else {
			window.location.replace('/page/404')
		}
	},
	updateSeo: function(route, data={}) {
		let { pathname, search } = window.location
		if (route.component.getSeoData instanceof Function) {
			Seo.browser(route.component.getSeoData({
				pathname,
				data,
				query: URL.getParam(search)
			}))
		}
	},
	render: function (route) {
		// 开发环境兼容代码
		if (_DEBUG_ && route.component.getInitialProps instanceof Function) {
			let { pathname, search } = window.location
			route.component.getInitialProps({
				pathname,
				href: window.location.href,
				query: URL.getParam(search)
			}).then(props => {
				route.component.defaultProps = Object.assign({}, route.component.defaultProps, props)
				render(<App routes={routes} initialRoute={route} />, document.getElementById('root'))
				this.updateSeo(route, props)
			}).catch(err => console.log(err))
		} else {
			route.component.defaultProps = Object.assign({}, route.component.defaultProps, initialProps)
			hydrate(<App routes={routes} initialRoute={route} />, document.getElementById('root'))
			this.updateSeo(route, initialProps)
		}
	}
}
