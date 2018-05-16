/**
 * 处理不同页面的seo信息
 * 数据格式
 * title: 页面标题
 * keyword: 关键字
 * desc: 描述信息
 */
const DEFAULT_SEO = {
  title: 'FEGO大前端 - 官方网站',
  keyword: 'fego，前端，WEB前端，移动客户端，nodejs',
  desc: '',
};

function browser(data) {
  data = Object.assign({}, DEFAULT_SEO, data);
  if (window && window.document) {
    document.title = data.title;
    document.querySelector('meta[name=keywords]').content = data.keyword;
    document.querySelector('meta[name=description]').content = data.desc;
  }
}

function server(data) {
  return Object.assign({}, DEFAULT_SEO, data);
}

export default {
  browser,
  server,
};
