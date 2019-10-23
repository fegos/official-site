/**
 * 处理不同页面的seo信息
 * 数据格式
 * title: 页面标题
 * keyword: 关键字
 * desc: 描述信息
 */
const DEFAULT_SEO = {
  title: '技术心得',
  keyword: '技术心得',
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
