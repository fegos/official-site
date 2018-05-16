export default [
	{
		key: 'home',
		title: '首页', path: '/'
	}, {
		key: 'industry',
		title: '产业中心',
		path: '/industry/product',
		children: [
			{ key: 'product', title: '商品', path: '/industry/product' },
			{ key: 'delivery', title: '现货交收', path: '/industry/delivery' },
			{ key: 'introduction', title: '龙商华泰城简介', path: '/industry/introduction' }
		]
	}, {
		key: 'news',
		title: '资讯中心',
		path: '/news/industry',
		children: [
			{ key: 'industry', title: '行业动态', path: '/news/industry' },
			{ key: 'notice', title: '中心动态', path: '/news/notice' },
			{ key: 'law', title: '法律法规', path: '/news/law' },
		]
	}, {
		key: 'company',
		title: '企业概况',
		path: '/company/intro',
		children: [
			{ key: 'intro', title: '公司简介', path: '/company/intro' },
			{ key: 'culture', title: '企业文化', path: '/company/culture' },
			{ key: 'contact', title: '联系我们', path: '/company/contact' }
		]
	}, {
		key: 'mall',
		title: '龙商华泰城',
		path: 'http://spot.hhtcex.com/',
	}
]