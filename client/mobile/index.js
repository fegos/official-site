import { Fetch } from 'nsip'
import Interceptor from 'Interceptor'
import App from 'src/app'
// 启用拦截处理器
Interceptor.enable(Fetch)
App.init()
