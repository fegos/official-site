webpackJsonp([3],{501:function(n,s){n.exports={content:["article",["h1","Fetch"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["p","\u7ec4\u4ef6\u7ee7\u627f\u81ea ",["a",{title:null,href:"https://github.com/axios/axios"},"Axios"]," \u5f00\u6e90\u5e93 \uff0c\u7528\u6765\u8fdb\u884chttp\u7f51\u7edc\u8bf7\u6c42"],["h3","\u5e38\u7528\u65b9\u6cd5"],["h4","\u521d\u59cb\u5316"],["pre",{lang:null,highlighted:'Fetch<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">\'http://localhost:3001/api\'</span>\nFetch<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">1000</span>`'},["code","Fetch.defaults.baseURL = 'http://localhost:3001/api'\nFetch.defaults.timeout = 1000`"]],["h4","\u62e6\u622a\u8bbe\u7f6e"],["pre",{lang:null,highlighted:'Fetch<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>function <span class="token punctuation">(</span>config<span class="token punctuation">)</span> {\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">\'post\'</span><span class="token punctuation">)</span> {\n\t\tlet data <span class="token operator">=</span> config<span class="token punctuation">.</span>data\n\t\treturn Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>{ encrypt<span class="token punctuation">:</span> <span class="token string">\'00000\'</span> }<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n\t\t\tconfig<span class="token punctuation">.</span>data <span class="token operator">=</span> data\n\t\t\treturn config<span class="token comment" spellcheck="true">;</span>\n\t\t}<span class="token punctuation">)</span>\n\t}\n\t<span class="token keyword">else</span> {\n\t\treturn config<span class="token comment" spellcheck="true">;</span>\n\t}\n}<span class="token punctuation">,</span> function <span class="token punctuation">(</span>error<span class="token punctuation">)</span> {\n\treturn Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nFetch<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>function <span class="token punctuation">(</span>response<span class="token punctuation">)</span> {\n\treturn response<span class="token punctuation">.</span>data<span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">,</span> function <span class="token punctuation">(</span>error<span class="token punctuation">)</span> {\n\treturn Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","Fetch.interceptors.request.use(function (config) {\n\tif (config.method == 'post') {\n\t\tlet data = config.data\n\t\treturn Promise.resolve({ encrypt: '00000' }).then((data) => {\n\t\t\tconfig.data = data\n\t\t\treturn config;\n\t\t})\n\t}\n\telse {\n\t\treturn config;\n\t}\n}, function (error) {\n\treturn Promise.reject(error);\n});\n\nFetch.interceptors.response.use(function (response) {\n\treturn response.data;\n}, function (error) {\n\treturn Promise.reject(error);\n});"]],["h4","Get\u8bf7\u6c42"],["pre",{lang:null,highlighted:'Fetch<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/test/fetch/list?a=100\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> {\n\tthis<span class="token punctuation">.</span><span class="token function">__requestResult</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=</span><span class="token operator">></span> {\n\tthis<span class="token punctuation">.</span><span class="token function">__requestResult</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","Fetch.get('/test/fetch/list?a=100').then(res => {\n\tthis.__requestResult(true, res)\n}).catch(err => {\n\tthis.__requestResult(false, err)\n});"]],["h4","Post\u8bf7\u6c42"],["pre",{lang:null,highlighted:'Fetch<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/test/fetch/list\'</span><span class="token punctuation">,</span> { p<span class="token punctuation">:</span> <span class="token string">\'xxx\'</span> }<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> {\n\tthis<span class="token punctuation">.</span><span class="token function">__requestResult</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>err <span class="token operator">=</span><span class="token operator">></span> {\n\tthis<span class="token punctuation">.</span><span class="token function">__requestResult</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","Fetch.post('/test/fetch/list', { p: 'xxx' }).then(res => {\n\tthis.__requestResult(true, res)\n}).catch(err => {\n\tthis.__requestResult(false, err)\n});"]],["h4","\u53d6\u6d88\u8bf7\u6c42"],["pre",{lang:null,highlighted:'var CancelToken <span class="token operator">=</span> Fetch<span class="token punctuation">.</span>CancelToken<span class="token comment" spellcheck="true">;</span>\nvar source <span class="token operator">=</span> CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\nFetch<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/test/fetch/cancel\'</span><span class="token punctuation">,</span> { cancelToken<span class="token punctuation">:</span> source<span class="token punctuation">.</span>token }<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=</span><span class="token operator">></span> {\n\tthis<span class="token punctuation">.</span><span class="token function">__requestResult</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n}<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tthis<span class="token punctuation">.</span><span class="token function">__requestResult</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>Fetch<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> {\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Request canceled\'</span><span class="token punctuation">,</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t} <span class="token keyword">else</span> {\n\t\t<span class="token operator">/</span><span class="token operator">/</span> \u5904\u7406\u9519\u8bef\n\t}\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nfunction <span class="token function">cancelRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'========\'</span><span class="token punctuation">)</span>\n\tsource<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">\'\u64cd\u4f5c\u88ab\u7528\u6237\u53d6\u6d88\u3002\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\tthis<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>{\n\t\tfetchMsg<span class="token punctuation">:</span> <span class="token string">\'\u64cd\u4f5c\u88ab\u7528\u6237\u53d6\u6d88\u3002\u3002\'</span><span class="token punctuation">,</span>\n\t\tlist<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\t}<span class="token punctuation">)</span>\n}\n<span class="token operator">/</span><span class="token operator">/</span>\u53d6\u6d88\u8bf7\u6c42\uff08\u6d88\u606f\u53c2\u6570\u662f\u53ef\u9009\u7684\uff09\n<span class="token operator">/</span><span class="token operator">/</span>\u6ce8\u610f\uff1aAndroid Debug \u4e0b\u4f1a\u7acb\u5373\u6267\u884c\n<span class="token function">setTimeout</span><span class="token punctuation">(</span>cancelRequest<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>'},["code","var CancelToken = Fetch.CancelToken;\nvar source = CancelToken.source();\nFetch.get('/test/fetch/cancel', { cancelToken: source.token }).then(res => {\n\tthis.__requestResult(true, res)\n}).catch((error) => {\n\tconsole.log(error.message);\n\tthis.__requestResult(false, error)\n\tif (Fetch.isCancel(error)) {\n\t\tconsole.log('Request canceled', error.message);\n\t} else {\n\t\t// \u5904\u7406\u9519\u8bef\n\t}\n});\n\nfunction cancelRequest() {\n\tconsole.log('========')\n\tsource.cancel('\u64cd\u4f5c\u88ab\u7528\u6237\u53d6\u6d88\u3002');\n\tthis.setState({\n\t\tfetchMsg: '\u64cd\u4f5c\u88ab\u7528\u6237\u53d6\u6d88\u3002\u3002',\n\t\tlist: []\n\t})\n}\n//\u53d6\u6d88\u8bf7\u6c42\uff08\u6d88\u606f\u53c2\u6570\u662f\u53ef\u9009\u7684\uff09\n//\u6ce8\u610f\uff1aAndroid Debug \u4e0b\u4f1a\u7acb\u5373\u6267\u884c\nsetTimeout(cancelRequest.bind(this), 3000)"]],["h4","\u5e76\u53d1\u8bf7\u6c42"],["pre",{lang:null,highlighted:'function <span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\treturn Fetch<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/test/fetch/username\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\nfunction <span class="token function">getNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\treturn Fetch<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/test/fetch/nickname\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\nlet that <span class="token operator">=</span> this\nFetch<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">getUserName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">getNickName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\t<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n\tFetch<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span>function <span class="token punctuation">(</span>username<span class="token punctuation">,</span> nickname<span class="token punctuation">)</span> {\n\t\tthat<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>{\n\t\t\tfetchMsg<span class="token punctuation">:</span> <span class="token string">\'\u6210\u529f\'</span><span class="token punctuation">,</span>\n\t\t\tlist<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t\t\t{ name<span class="token punctuation">:</span> username<span class="token punctuation">.</span>data<span class="token punctuation">.</span>username }<span class="token punctuation">,</span>\n\t\t\t\t{ name<span class="token punctuation">:</span> nickname<span class="token punctuation">.</span>data<span class="token punctuation">.</span>nickname }\n\t\t\t<span class="token punctuation">]</span>\n\t\t}<span class="token punctuation">)</span>\n\t}<span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","function getUserName() {\n\treturn Fetch.get('/test/fetch/username');\n}\n\nfunction getNickName() {\n\treturn Fetch.get('/test/fetch/nickname');\n}\nlet that = this\nFetch.all([getUserName(), getNickName()])\n\t.then(\n\tFetch.spread(function (username, nickname) {\n\t\tthat.setState({\n\t\t\tfetchMsg: '\u6210\u529f',\n\t\t\tlist: [\n\t\t\t\t{ name: username.data.username },\n\t\t\t\t{ name: nickname.data.nickname }\n\t\t\t]\n\t\t})\n\t})\n);"]]],meta:{title:"Fetch",subTitle:"\u8bf7\u6c42",filename:"components/util/Fetch/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#Fetch",title:"Fetch"},"Fetch"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u5e38\u7528\u65b9\u6cd5",title:"\u5e38\u7528\u65b9\u6cd5"},"\u5e38\u7528\u65b9\u6cd5"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u521d\u59cb\u5316",title:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u62e6\u622a\u8bbe\u7f6e",title:"\u62e6\u622a\u8bbe\u7f6e"},"\u62e6\u622a\u8bbe\u7f6e"]],["li",["a",{className:"bisheng-toc-h4",href:"#Get\u8bf7\u6c42",title:"Get\u8bf7\u6c42"},"Get\u8bf7\u6c42"]],["li",["a",{className:"bisheng-toc-h4",href:"#Post\u8bf7\u6c42",title:"Post\u8bf7\u6c42"},"Post\u8bf7\u6c42"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u53d6\u6d88\u8bf7\u6c42",title:"\u53d6\u6d88\u8bf7\u6c42"},"\u53d6\u6d88\u8bf7\u6c42"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u5e76\u53d1\u8bf7\u6c42",title:"\u5e76\u53d1\u8bf7\u6c42"},"\u5e76\u53d1\u8bf7\u6c42"]]]}}});