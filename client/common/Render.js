import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router';
import { getStyle } from 'server-style-loader/store';
import Seo from 'Seo';
import URL from 'URL';
import Frame from 'src/frame';
import Routes from 'src/sys/route';

import { Fetch } from 'fego';
import Interceptor from 'Interceptor';

function matchRoute(pathname) {
  return matchRoutes(Routes, pathname).filter(route => route.match.isExact).map(route => route.route)[0];
}

async function render({ location, isMobile }) {
  const { pathname, search, href } = location;
  let error; // 错误信息

  // 获取route
  const route = matchRoute(pathname);
  if (!route || !route.component) {
    error = new Error('page not found');
    error.code = 404;
    throw error;
  }

  if (!(route.component.prototype instanceof Component)) {
    const mod = await route.component();
    route.component = mod.default ? mod.default : mod;
  }

  // 获取异步样式
  const styles = getStyle(`${isMobile ? 'mobile' : 'desktop'}:${pathname}`);

  let initialProps;
  // initialProps
  if (route.component.getInitialProps instanceof Function) {
    try {
      initialProps = await route.component.getInitialProps({
        pathname,
        href,
        query: URL.getParam(search),
      });
    } catch (err) {
      error = err;
    }
    route.component.defaultProps = Object.assign({}, route.component.defaultProps, initialProps);
  }
  // seo data
  let seoData;
  if (route.component.getSeoData instanceof Function) {
    seoData = route.component.getSeoData({
      pathname,
      data: initialProps,
      query: URL.getParam(search),
    });
  }
  seoData = Seo.server(seoData);

  // 渲染页面
  const template = renderToString(
    <StaticRouter location={href}>
      <Frame>{renderRoutes([route])}</Frame>
    </StaticRouter>
  );

  return {
    template,
    seoData,
    styles,
    initialProps,
    error,
  };
}

export {
  Fetch,
  Interceptor,
  matchRoute,
  render,
};
