### 关键词
---
渐进式：
- 降低站点改造的代价，逐步支持各项新技术，不要一蹴而就
- 新技术标准的支持度还不完全，新技术的标准还未完全确定
- 适用于选用任何浏览器的所有用户

适用于生产的PWA应用技术栈：
- react.js
- react-router（前端路由）
- fetch（网络请求）
- antd（UI组件库）
- workBox（Servic Worker配置加缓存管理）
- Webpack（工程化、自动构建）
- redux（状态管理）

额外技术：
- 组件动画，Ant motion
- 服务端渲染SSR：Next

从业务稳定性角度要考虑的：**提供降级方案**、**错误监控**以及**数据统计**

### PWA核心技术
---
1. Web App Manifest – 在主屏幕添加app图标，定义手机标题栏颜色之类
2. Service Worker - 缓存，离线开发，以及地理位置信息处理等

    Chrome搞了个Service Worker出来，给了Web一个可以跑在后台的线程，它可以搭配非常靠谱的Cache API做缓存、可以拦截所有HTTP请求并使用Fetch API进行response，一个非常完备的Proxy就这么诞生了

    ![image](http://mmbiz.qpic.cn/mmbiz_png/uMh5nccSicmKvPvxnlWKToLoU1bNpCglIxgSls88ia4zgJqXgIfrkpRDe8oCMyS8Tgu8dqCAic4AiaDy81ekHC3jXw/?tp=webp&wxfrom=5&wx_lazy=1)
3. App Shell：先显示APP的主结构，再填充主数据，更快显示更好体验
4. Push Notification – 消息推送，这个需要依赖GCM，得Google Play支持，国内可以忽略了

### PWA优缺点
---
缺点：
> 门槛不低，需要全站HTTPS，学习Service Worker

优点：
> 1. 现代web特性，离线体验
> 2. 优雅降级、渐进增强
> 3. 开发成本低，投入产出比高

### PWA应用功能：
---
#### App Shell模型
---
App Shell 模型是架构 PWA 的一种方式，它的第一次加载速度非常快，并且可以被Service Worker立即缓存，可确保在用户重复访问时提供即时、可靠的良好性能，消除白屏时间，获得与Native APP相似的体验

要想让App Shell可以被Service Worker缓存，瞬间加载并独立与JavaScript渲染，需要把App Shell的Html标签、CSS样式和图片资源一并内联至各个路由的静态*.html文件中

为了避免组件多次迭代造成App Shell难以维护的问题，可以使用react的renderToString和renderToStaticMarkup这两个神奇的React Api，将App Shell预先渲染成字符串并注入html，至于对DOM有强依赖的页面，建议额外写一个空状态组件来切换

如果是使用服务端渲染，由于服务端返回的 HTML 已经包含了首屏的页面结构，并不需要客户端渲染首屏内容，App Shell就没有存在的必要了

当然在渲染优化这块能做的工作还有很多

#### 资源缓存
---
使用Service Worker和Cache Api缓存资源

Chrome目前推出了workbox来帮助开发者快速编写sw.js脚本和缓存资源

Workbox 提供的缓存策略，主要有这几种：`cache-first`，`cache-only`，`network-first`，`network-only`，`stale-while-revalidate`

- Cache First

    适合结果不怎么变动且对实时性要求不高的请求
- Cache Only

    适合一上线就不会变的静态资源请求
- Network First

    适用于返回结果不太固定或对实时性有要求的请求，为网络请求失败进行兜底
- Network Only

    适合对实时性要求非常高的请求
- Stale While Revalidate

    当请求的路由有对应的 Cache 缓存结果就直接返回，在返回 Cache 缓存结果的同时会在后台发起网络请求拿到请求结果并更新 Cache 缓存，如果本来就没有 Cache 缓存的话，直接就发起网络请求并返回结果。


#### 添加到主屏幕
---
为了将PWA应用添加到主屏幕，使用manifest文件，它提供了将网站书签保存到设备主屏幕的功能。

manifest文件定义了应用的名称、图标等信息
```
示例文件
{
  "name": "Minimal app to try PWA",
  "short_name": "Minimal PWA",
  "display": "standalone",
  "start_url": "/",
  "theme_color": "#8888ff",
  "background_color": "#aaaaff",
  "icons": [
    {
      "src": "e.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ]
}
```
在Html文件中引入：
```
<link rel="manifest" href="/manifest.json" >
```
超棒的manifest生成器：https://app-manifest.firebaseapp.com/


#### 检验PWA站点

1. Chrome Devtool
可以用Application选项卡来观察Service Worker以及Cache Storage，也可以用来调试Service Worker

2. Lighthouse是Google开发的一个检验站点性能相关的应用，是PWA的审核、性能指标工具

#### 解决方案
- [react-pwa](https://github.com/Atyantik/react-pwa)
- [react-spa-project](https://github.com/xiaoping6688/react-spa-project)

### 了解更多
---
- [PWA 在饿了么的实践经验](https://zhuanlan.zhihu.com/p/25800461)
- [饿了么的PWA升级实践(多页应用)](http://huangxuan.me/2017/07/12/upgrading-eleme-to-pwa/)
