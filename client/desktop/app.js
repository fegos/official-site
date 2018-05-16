import React, { Component } from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import Router from 'Router';
import Seo from 'Seo';
import URL from 'URL';
import Frame from 'src/frame';
import routes from 'src/sys/route';

const initialProps = window.__INITIAL_PROPS__ || {};
const _DEBUG_ = process.env.NODE_ENV === 'development';

const PAGE_MAP = {
  '/': '首页',
  '/library': '组件库',
  '/wiki': '知识库',
  '/labs': '实验室',
}
function getPageName(pathname) {
  let name = PAGE_MAP[pathname]
  if (!name) {
    let res = pathname.match(/\/wiki\/article\/(\w+)/)
    name = res ? `文章: ${res[1]}` : pathname
  }
  return name
}

class App extends Component {
  componentDidMount() {
    ga('set', {
      'page': location.pathname,
      'dimension2': getPageName(location.pathname)
    })
    ga('send', 'pageview')
    console.log(getPageName(location.pathname))
  }
  render() {
    return (
      <BrowserRouter forceRefresh={!window.history.pushState}>
        <Frame>
          <Router {...this.props} onChange={this.onChange} />
        </Frame>
      </BrowserRouter>
    );
  }
  onChange = (history) => {
    let { location={}, action } = history;
    if (action === 'PUSH') {
      ga('set', {
        'page': location.pathname,
        'dimension2': getPageName(location.pathname)
      })
      ga('send', 'pageview')
      console.log(getPageName(location.pathname))
    }
  }
}

export default {
  init() {
    const { pathname } = window.location;
    const curRoute = matchRoutes(routes, pathname)
      .filter(route => route.match.isExact)
      .map(route => route.route)[0];
    if (curRoute && curRoute.component) {
      if (curRoute.component.prototype instanceof Component) {
        this.render(curRoute);
      } else {
        curRoute.component().then((mod) => {
          curRoute.component = mod.default ? mod.default : mod;
          this.render(curRoute);
        });
      }
    } else {
      window.location.replace('/page/404');
    }
  },
  updateSeo(route, data = {}) {
    const { pathname, search } = window.location;
    if (route.component.getSeoData instanceof Function) {
      Seo.browser(route.component.getSeoData({
        pathname,
        data,
        query: URL.getParam(search),
      }));
    }
  },
  render(route) {
    // 开发环境兼容代码
    if (_DEBUG_ && route.component.getInitialProps instanceof Function) {
      const { pathname, search } = window.location;
      route.component.getInitialProps({
        pathname,
        href: window.location.href,
        query: URL.getParam(search),
      }).then((props) => {
        route.component.defaultProps = Object.assign({}, route.component.defaultProps, props);
        render(<App routes={routes} initialRoute={route} />, document.getElementById('root'));
        this.updateSeo(route, props);
      }).catch(err => console.log(err));
    } else {
      route.component.defaultProps = Object.assign({}, route.component.defaultProps, initialProps);
      hydrate(<App routes={routes} initialRoute={route} />, document.getElementById('root'));
      this.updateSeo(route, initialProps);
    }
  },
};
