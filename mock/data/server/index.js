/**
 * node服务本地调试接口
 */
'use strice'
module.exports = {
	'commodity/queryMarket': {
		retcode: 200,
		retdesc: '',
		data: {
			result: [
				{
					"commodityCatagory": "测试1",
					"commodityUnit": "公斤",
					"commodityDate": 1491795886605,
					"commodityMarkets": [
						{
							"commodityPrice": "378",
							"marketName": "市场名称1"
						},{
							"commodityPrice": "378",
							"marketName": "市场名称2"
						},{
							"commodityPrice": "378",
							"marketName": "市场名称3"
						},{
							"commodityPrice": "378",
							"marketName": "市场名称4"
						}
					],
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg"
				},{
					"commodityCatagory": "测试2",
					"commodityUnit": "袋",
					"commodityDate": 1491795886605,
					"commodityMarkets": [
						{
							"commodityPrice": "345",
							"marketName": "市场名称"
						},{
							"commodityPrice": "378",
							"marketName": "市场名称2"
						}
					],
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg"
				},{
					"commodityCatagory": "测试3",
					"commodityUnit": "公斤",
					"commodityDate": 1491795886605,
					"commodityMarkets": [
						{
							"commodityPrice": "378",
							"marketName": "市场名称2"
						}
					],
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg"
				},{
					"commodityCatagory": "测试4",
					"commodityUnit": "袋",
					"commodityDate": 1491795886605,
					"commodityMarkets": [
						{
							"commodityPrice": "345",
							"marketName": "市场名称"
						}
					],
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg"
				},{
					"commodityCatagory": "测试5",
					"commodityUnit": "袋",
					"commodityDate": 1491795886605,
					"commodityMarkets": [
						{
							"commodityPrice": "345",
							"marketName": "市场名称"
						}
					],
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg"
				}
			]
		}
	},
	'deal/statistics': {
		retcode: 200,
		retdesc: '',
		data: {
			'totalDealCount':638790000,
			'totalDealAmount':140032,
			'totalListCount':8049000,
			'totalDelistCount':3045000
		}
	},
	'listing/latestList': {
		retcode: 200,
		retdesc: '',
		data: {
			result: [
				{
					"commodityName": "测试商品1",
					"listingQuantity": 123456,
					"commodityFactor": 100,
					"commodityUnit": "kg",
					"company": "测试公司",
					"time": 1491795886605,
					"direction": 2,
					"packageType": "袋"
				},{
					"commodityName": "测试商品2",
					"listingQuantity": 3000,
					"commodityFactor": 50,
					"commodityUnit": "g",
					"company": "测试公司2",
					"time": 1491795886605,
					"direction": 1,
					"packageType": "袋"
				}
			]
		}
	},
	'delist/latestList': {
		retcode: 200,
		retdesc: '',
		data: {
			result: [
				{
					"commodityName": "测试商品1",
					"listingQuantity": 123456,
					"commodityFactor": 100,
					"commodityUnit": "kg",
					"company": "测试公司",
					"time": 1491795886605,
					"direction": 2,
					"packageType": "袋"
				},{
					"commodityName": "测试商品2",
					"listingQuantity": 3000,
					"commodityFactor": 50,
					"commodityUnit": "g",
					"company": "测试公司2",
					"time": 1491795886605,
					"direction": 1,
					"packageType": "袋"
				}
			]
		}
	},
	'deal/latestStatistics': {
		retcode: 200,
		retdesc: '',
		data: {
			result: [
				{
					"commodityName": "测试商品1",
					"listingQuantity": 123456,
					"commodityFactor": 100,
					"commodityUnit": "kg",
					"company": "测试公司",
					"time": 1491795886605,
					"direction": 2,
					"packageType": "袋"
				},{
					"commodityName": "测试商品2",
					"listingQuantity": 3000,
					"commodityFactor": 50,
					"commodityUnit": "g",
					"company": "测试公司2",
					"time": 1491795886605,
					"direction": 1,
					"packageType": "袋"
				}
			]
		}
	},
	'listing/latestSupplyList': {
		retcode: 200,
		retdesc: '',
		data: {
			result: [
				{
					"commodityName": "测试内容",
					"commodityFactor": 50,
					"commodityUnit": "公斤",
					"packageType": "袋",
					"commodityOriginPlace": "12345",
					"commodityBrand": "测试品牌",
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg",
					"orderQuantity": 123456,
					"listingPrice": 9999.34,
					"listingNo": 11111
				},{
					"commodityName": "测试内容",
					"commodityFactor": 50,
					"commodityUnit": "公斤",
					"packageType": "袋",
					"commodityOriginPlace": "12345",
					"commodityBrand": "测试品牌",
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg",
					"orderQuantity": 123456,
					"listingPrice": 56445.34,
					"listingNo": 11111
				}
			]
		}
	},
	'listing/latestPurchaseList': {
		retcode: 200,
		retdesc: '',
		data: {
			result: [
				{
					"commodityName": "测试内容",
					"commodityFactor": 50,
					"commodityUnit": "公斤",
					"packageType": "袋",
					"commodityOriginPlace": "12345",
					"commodityBrand": "测试品牌",
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg",
					"orderQuantity": 123456,
					"listingPrice": 12.34,
					"listingNo": 11111
				},
				{
					"commodityName": "测试内容",
					"commodityFactor": 50,
					"commodityUnit": "公斤",
					"packageType": "袋",
					"commodityOriginPlace": "12345",
					"commodityBrand": "测试品牌",
					"commodityPic": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508498028&di=762d4a473525c771bd288215430dbbe2&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.iqshw.com%2Fd%2Ffile%2Fgexingqqziyuan%2Ftouxiang%2F2016%2F03%2F17%2F1759030d5ed8937a49b077cb754deda2.jpg",
					"orderQuantity": 123456,
					"listingPrice": 12.34,
					"listingNo": 11111
				}
			]
		}
	},
	'notice/list': {
		retcode: 200,
		retdesc: '',
		data: {
			totalCount: 12,
			totalPage: 2,
			pageSize: 10,
			pageNo: 1,
			'result|10': [{
				'noticeId': '@id',
				'title':'@csentence(20,25)',
				'publishTime':'@date("2017-MM-dd")'
			}]
		}
	},
	'notice/detail': {
		retcode: 200,
		retdesc: '',
		data: {
			"noticeId": "@id",
			"title": '测试标题：关于耶稣受难日调整交易时间的通知',
			"content": `<strong><span style="font-size:20px">各会员单位及客户：</span></strong><br />&nbsp;&nbsp; &nbsp;&nbsp;
			<span style="color:#e74c3c">2017年4月14日</span>（星期五）为耶稣受难日，国际主流金融市场休市。
			为避免期间本市场无有效报价或报价不能正确反映市场供需，影响正常交易，交易中心将交易时间调整如下：<br />&nbsp;&nbsp; &nbsp;&nbsp;4月14日（星期五）全天休市；4月15日、16日（星期六、日）为周末正常休市；
			4月17日（星期一）早上8:00照常开市，恢复正常交易。<br /><img alt="" src="https://www.baidu.com/img/bd_logo1.png" />
			<img alt="" src="https://www.baidu.com/img/bd_logo1.png" />
			<p>&nbsp;&nbsp;<a href="http://www.163.com"> &nbsp; <span style="font-family:Georgia,serif"><u>特此通知。</u>&nbsp;</span></a></p>
			<div style="text-align:right">&nbsp;&nbsp;黑龙江华泰商品交易中心有限公司</div><div style="text-align:right">&nbsp;2017年3月10日 &nbsp; &nbsp;</div>`,
			"organization": "黑龙江华泰商品交易中心有限公司",
			"publishTime": 1491795886605
		}
	}
}
