webpackJsonp([4],{500:function(n,s){n.exports={content:["article",["h1","\u4e8b\u4ef6\u7ba1\u7406\u5668"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["ul",["li",["p","\u7528\u4e8e\u8ba2\u9605\uff0f\u53d1\u5e03\u4e8b\u4ef6"]]],["h3","\u793a\u4f8b"],["pre",{lang:"js",highlighted:'<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmsg<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'eventName\'</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmsg<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">\'eventName\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// \u6ce8\u9500\u6240\u6709\u76d1\u542c\u51fd\u6570</span>\nmsg<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// \u6ce8\u9500\u6240\u6709eventName\u7684\u76d1\u542c\u51fd\u6570</span>\nmsg<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">\'eventName\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// \u6ce8\u9500eventName\u4e0b\u7684\u76d1\u542c\u51fd\u6570fn</span>\nmsg<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">\'eventName\'</span><span class="token punctuation">,</span> fn<span class="token punctuation">)</span>\n\n<span class="token comment" spellcheck="true">// \u6ce8\u610f\uff1a\u516c\u5171\u4e8b\u4ef6\u6ce8\u9500\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528ID\u65b9\u5f0f\u53ea\u9700\u8981\u81ea\u5df1\u7684\u76d1\u542c\u51fd\u6570</span>\n<span class="token comment" spellcheck="true">// eventName#id</span>\nmsg<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'ready#333\'</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// \u53ea\u4f1a\u6ce8\u9500ready\u4e8b\u4ef6\u4e0bid=333\u7684\u76d1\u542c\u51fd\u6570</span>\n<span class="token comment" spellcheck="true">// \u4fbf\u6377\u5199\u6cd5 \u6548\u679c\u540c msg.off(\'eventName\', fn)</span>\nmsg<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">\'ready#333\'</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">// \u6ce8\u9500ID\u4e3a333\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570</span>\nmsg<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">\'#333\'</span><span class="token punctuation">)</span>'},["code","let msg = new EventManager();\nmsg.on('eventName', data=>{});\nmsg.emit('eventName', { a: 1});\n// \u6ce8\u9500\u6240\u6709\u76d1\u542c\u51fd\u6570\nmsg.off()\n// \u6ce8\u9500\u6240\u6709eventName\u7684\u76d1\u542c\u51fd\u6570\nmsg.off('eventName')\n// \u6ce8\u9500eventName\u4e0b\u7684\u76d1\u542c\u51fd\u6570fn\nmsg.off('eventName', fn)\n\n// \u6ce8\u610f\uff1a\u516c\u5171\u4e8b\u4ef6\u6ce8\u9500\u65f6\uff0c\u5efa\u8bae\u4f7f\u7528ID\u65b9\u5f0f\u53ea\u9700\u8981\u81ea\u5df1\u7684\u76d1\u542c\u51fd\u6570\n// eventName#id\nmsg.on('ready#333', data=>{});\n// \u53ea\u4f1a\u6ce8\u9500ready\u4e8b\u4ef6\u4e0bid=333\u7684\u76d1\u542c\u51fd\u6570\n// \u4fbf\u6377\u5199\u6cd5 \u6548\u679c\u540c msg.off('eventName', fn)\nmsg.off('ready#333')\n// \u6ce8\u9500ID\u4e3a333\u7684\u6240\u6709\u76d1\u542c\u51fd\u6570\nmsg.off('#333')"]]],meta:{title:"EventManager",subTitle:"\u4e8b\u4ef6\u7ba1\u7406\u5668",filename:"components/util/EventManager/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#\u4e8b\u4ef6\u7ba1\u7406\u5668",title:"\u4e8b\u4ef6\u7ba1\u7406\u5668"},"\u4e8b\u4ef6\u7ba1\u7406\u5668"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u793a\u4f8b",title:"\u793a\u4f8b"},"\u793a\u4f8b"]]]}}});