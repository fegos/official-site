'use strict'
/**
 * ssr服务端渲染
 */
const TAG_RENDER = '[SSR ERROR]'
const TAG_DATA = '[SSR DATA ERROR]'
function initInterceptor(render, url) {
  // 拦截服务端渲染请求
  render.Interceptor.add({
    request: [function (config) {
      config.baseURL = url + '/api'
      return config
    }, function (err) {
      return Promise.reject(err)
    }]
  })
  render.Interceptor.enable(render.Fetch)
}

function shouldRender(url) {
  return !/^\/(cdn|api|beapi|checkappstatus)/.test(url)
}

function is50X(url) {
  return /^\/page\/50[0-9xX]/.test(url)
}

module.exports = options => {
  const { desktopRender, mobileRender, baseUrl } = options
  initInterceptor(desktopRender, baseUrl)
  initInterceptor(mobileRender, baseUrl)
  return async function (ctx, next) {
    let location = ctx.req._parsedUrl
    let isMobile = ctx.userAgent.isMobile
    let url = ctx.url
    let render
    // 路径不匹配直接返回
    if (!shouldRender(url)) return next()
    // 根据UA和路由匹配情况, 决定render类型
    if (isMobile && !mobileRender.matchRoute(location.pathname) && desktopRender.matchRoute(location.pathname)) {
      isMobile = false
    }
    render = isMobile ? mobileRender : desktopRender
    try {
      let result = await render.render({ location, isMobile })
      let { template = '', seoData = {}, initialProps = {}, styles = '', error = false } = result
      await ctx.render(isMobile ? 'mobile' : 'desktop', {
        root: template,
        seo: seoData,
        props: initialProps,
        style: `<style id='bundle_style' type='text/css'>${styles}</style>`
      })
      if (error) {
        delete error.request
        delete error.response
        ctx.logger.error(TAG_DATA, error)
      }
    } catch (err) {
      if (err.code === 404) {
        ctx.redirect('/page/404')
      } else if (!is50X(location.pathname)) {
        ctx.logger.error(TAG_RENDER, err)
        ctx.redirect('/page/50x')
      } else {
        throw err
      }
    }
  }
}
