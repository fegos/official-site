import Handler from './Handler'

const Interceptors = []
const DefaultInterceptor = {
	request: [],
	response: [function (response) {
		let contentType = response.headers["content-type"], res = null;
		if (/json/.test(contentType)) {
			res = Handler.json(response.data)
		} else {
			res = response
		}
		return res;
	}, function (error) {
		return Promise.reject(error);
	}]
}

function add(interceptor) {
	Interceptors.push(interceptor)
}

function enable(axios) {
	Interceptors.reverse().forEach(({ request, response }) => {
		request && axios.interceptors.request.use(...request)
		response && axios.interceptors.response.use(...response)
	})
}

add(DefaultInterceptor)

export default {
	add,
	enable,
	Interceptors
}
