webpackJsonp([11],{493:function(n,t){n.exports={content:["article",["h1","fego-rn \u7ec4\u4ef6\u5e93"],["h2","UI \u7ec4\u4ef6\u6837\u5f0f\u8bbe\u8ba1\u89c4\u5219"],["h3","\u7ec4\u4ef6\u6837\u5f0f"],["ul",["li",["p","\u7ec4\u4ef6\u6837\u5f0f\u7edf\u4e00\u7531 UIComponent \u5904\u7406\u7ec4\u4ef6\u6837\u5f0f\uff0c\u6240\u6709 UI \u7c7b\u7ec4\u4ef6\u5747\u7ee7\u627f\u81f3 UIComponent"]]],["p","UI \u7c7b\u7ec4\u4ef6\u5171\u6709\u4ee5\u4e0b\u51e0\u79cd\u9014\u5f84\u4fee\u6539\u6837\u5f0f\u67d0\u4e00\u7ec4\u4ef6\u7684\u6837\u5f0f\uff1a"],["ol",["li",["p","\u4f5c\u4e3a\u5f00\u53d1\u8005\uff0c\u5728\u5f00\u53d1\u65f6\u53ef\u8bbe\u7f6e\u7684\u6837\u5f0f\uff1a"],["ul",["li",["p","baseStyle \uff1a\u7ec4\u4ef6\u63d0\u4f9b\u7684\u57fa\u7840\u6837\u5f0f\u3010\u5fc5\u987b\u3011"]],["li",["p","themeStyle \uff1a\u7ec4\u4ef6\u63d0\u4f9b\u7684\u4e3b\u9898\u6837\u5f0f(\u90e8\u5206\u7ec4\u4ef6\u63d0\u4f9b)"]]]],["li",["p","\u4f5c\u4e3a\u4f7f\u7528\u8005\uff0c\u5728\u4f7f\u7528\u65f6\u53ef\u8bbe\u7f6e\u7684\u6837\u5f0f\uff1a"],["ul",["li",["p","baseStyle \uff1a\u9700\u901a\u8fc7\u9759\u6001\u65b9\u6cd5 ",["code","setBaseStyle"]," \u7edf\u4e00\u8bbe\u7f6e\u4ea7\u54c1\u9879\u76ee\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\u57fa\u7840\u6837\u5f0f"]],["li",["p","themeStyle \uff1a\u9700\u901a\u8fc7\u9759\u6001\u65b9\u6cd5 ",["code","setThemeStyle"]," \u7edf\u4e00\u8bbe\u7f6e\u4ea7\u54c1\u9879\u76ee\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6\u4e3b\u9898\u6837\u5f0f"]],["li",["p","styles \uff1a\u4f7f\u7528\u8005\u81ea\u5b9a\u4e49\u6837\u5f0f\u5bf9\u8c61\uff0c\u901a\u8fc7\u4f20\u9012 styles prop \u5c5e\u6027\u8fdb\u884c\u8bbe\u7f6e"]],["li",["p","style \uff1a\u5bb9\u5668\u6837\u5f0f\uff0c\u7b49\u6548\u4e8e baseStyle.container\uff0c\u901a\u8fc7\u4f20\u9012 style prop \u5c5e\u6027\u8fdb\u884c\u8bbe\u7f6e"]],["li",["p","propStyle \uff1a\u4ee5 Style \u4e3a\u540e\u7f00\u7684 prop"]],["li",["p","simpleStyle \uff1a\u4f7f\u7528\u7ec4\u4ef6\u63d0\u4f9b\u7684\u7b80\u6613\u6837\u5f0f api (\u90e8\u5206\u7ec4\u4ef6\u63d0\u4f9b)"]]]]],["p","\u5f53\u901a\u8fc7\u5404\u4e2a\u65b9\u5f0f\u8bbe\u7f6e\u540c\u4e00\u6837\u5f0f\u65f6\uff0c\u6837\u5f0f\u751f\u6548\u7684\u89c4\u5219\u53c2\u7167\u4ee5\u4e0b\u4f18\u5148\u7ea7"],["blockquote",["p","baseStyle < themeStyle < styles < style < propStyle < simpleStyle"]],["h4","\u6837\u5f0f\u8bf4\u660e\u793a\u4f8b\uff1a"],["ul",["li",["p","\u4ee5 Button \u4e3a\u4f8b"]]],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// Button/index.js</span>\n<span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">// \u901a\u8fc7\u9759\u6001\u5c5e\u6027 simpleStyleProps \u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u7b80\u6613\u6837\u5f0f simpleStyle api</span>\n\t<span class="token keyword">static</span> simpleStyleProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t\ttextSize<span class="token punctuation">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'text\'</span><span class="token punctuation">,</span> attr<span class="token punctuation">:</span> <span class="token string">\'fontSize\'</span> <span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token comment" spellcheck="true">// other codes</span>\n\t<span class="token function">functionA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment" spellcheck="true">// \u901a\u8fc7 this.style \u53ef\u4ee5\u5f15\u7528\u6837\u5f0f</span>\n\t\t<span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// \u7531\u5f00\u53d1\u8005\u63d0\u4f9b\u7ec4\u4ef6\u7684\u57fa\u7840\u6837\u5f0f</span>\nButton<span class="token punctuation">.</span>baseStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tcontainer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tbackgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span>\n\t<span class="token punctuation">}</span>\n\ttext <span class="token punctuation">{</span>\n\t\tcolor<span class="token punctuation">:</span> <span class="token string">\'black\'</span><span class="token punctuation">,</span>\n\t\tfontSize<span class="token punctuation">:</span> <span class="token number">16</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// Button/index.js\nclass Button extends Component {\n\t// \u901a\u8fc7\u9759\u6001\u5c5e\u6027 simpleStyleProps \u4e3a\u7ec4\u4ef6\u5b9a\u4e49\u7b80\u6613\u6837\u5f0f simpleStyle api\n\tstatic simpleStyleProps = {\n\t\ttextSize: { name: 'text', attr: 'fontSize' }\n\t}\n\t// other codes\n\tfunctionA() {\n\t\t// \u901a\u8fc7 this.style \u53ef\u4ee5\u5f15\u7528\u6837\u5f0f\n\t\tlet style = this.style;\n\t}\n}\n\n// \u7531\u5f00\u53d1\u8005\u63d0\u4f9b\u7ec4\u4ef6\u7684\u57fa\u7840\u6837\u5f0f\nButton.baseStyle = {\n\tcontainer: {\n\t\tbackgroundColor: 'white'\n\t}\n\ttext {\n\t\tcolor: 'black',\n\t\tfontSize: 16\n\t}\n}"]],["p","\u4f7f\u7528\u8005\u5728\u4f7f\u7528 Button \u7ec4\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u81ea\u5b9a\u4e49 Button \u7684\u6837\u5f0f\uff1a"],["ol",["li",["p","setBaseStyle:"],["pre",{lang:"jsx",highlighted:'Button<span class="token punctuation">.</span><span class="token function">setBaseStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\ttext<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tcolor<span class="token punctuation">:</span> <span class="token string">\'red\'</span> <span class="token comment" spellcheck="true">// \u5219\u6309\u94ae\u7684\u989c\u8272\u9ed8\u8ba4\u90fd\u4f1a\u663e\u793a\u7684\u6210\u7ea2\u8272</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>'},["code","Button.setBaseStyle({\n\ttext: {\n\t\tcolor: 'red' // \u5219\u6309\u94ae\u7684\u989c\u8272\u9ed8\u8ba4\u90fd\u4f1a\u663e\u793a\u7684\u6210\u7ea2\u8272\n\t}\n})"]]],["li",["p","themeStyle \u540c\u7406"]],["li",["p","styles"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">let</span> styleObj <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tcontainer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tbackgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span>  <span class="token comment" spellcheck="true">// \u5219\u6309\u94ae\u7684\u989c\u8272\u4f1a\u663e\u793a\u7684\u6210\u84dd\u8272</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\ttext<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tfontSize<span class="token punctuation">:</span> <span class="token number">14</span>  <span class="token comment" spellcheck="true">// \u5219\u6309\u94ae\u7684\u6587\u5b57\u4f1a\u663e\u793a\u7684\u621014\u53f7\u5b57\u4f53\u5927\u5c0f</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">styles</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styleObj<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","let styleObj = {\n\tcontainer: {\n\t\tbackgroundColor: 'blue'  // \u5219\u6309\u94ae\u7684\u989c\u8272\u4f1a\u663e\u793a\u7684\u6210\u84dd\u8272\n\t},\n\ttext: {\n\t\tfontSize: 14  // \u5219\u6309\u94ae\u7684\u6587\u5b57\u4f1a\u663e\u793a\u7684\u621014\u53f7\u5b57\u4f53\u5927\u5c0f\n\t}\n}\n<Button styles={styleObj} />"]]],["li",["p","style"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n\tbackgroundColor<span class="token punctuation">:</span> <span class="token string">\'green\'</span>  <span class="token comment" spellcheck="true">// \u7b49\u540c\u4e8e\u8bbe\u7f6e container\uff0c\u5219\u6309\u94ae\u7684\u989c\u8272\u4f1a\u663e\u793a\u7684\u6210\u84dd\u8272</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>'},["code","<Button style={{\n\tbackgroundColor: 'green'  // \u7b49\u540c\u4e8e\u8bbe\u7f6e container\uff0c\u5219\u6309\u94ae\u7684\u989c\u8272\u4f1a\u663e\u793a\u7684\u6210\u84dd\u8272\n}} />"]]],["li",["p","propStyle"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Button textStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n\tcolor<span class="token punctuation">:</span> <span class="token string">\'yellow\'</span>  <span class="token comment" spellcheck="true">// \u7b49\u540c\u4e8e\u8bbe\u7f6e text\uff0c\u5219\u6309\u94ae\u7684\u989c\u8272\u4f1a\u663e\u793a\u7684\u6210\u9ec4\u8272</span>\n<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>'},["code","<Button textStyle={{\n\tcolor: 'yellow'  // \u7b49\u540c\u4e8e\u8bbe\u7f6e text\uff0c\u5219\u6309\u94ae\u7684\u989c\u8272\u4f1a\u663e\u793a\u7684\u6210\u9ec4\u8272\n}} />"]]],["li",["p","simpleStyle"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">textSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>  <span class="token comment" spellcheck="true">// \u5219\u6309\u94ae\u7684\u6587\u5b57\u4f1a\u663e\u793a\u7684\u621024\u53f7\u5b57\u4f53\u5927\u5c0f</span>'},["code","<Button textSize={24} />  // \u5219\u6309\u94ae\u7684\u6587\u5b57\u4f1a\u663e\u793a\u7684\u621024\u53f7\u5b57\u4f53\u5927\u5c0f"]]]],["h3","simpleStyleProps"],["ul",["li",["p","\u89c4\u5b9a\u4e86\u53ef\u4ee5\u4fbf\u6377\u7684\u4fee\u6539\u54ea\u4e9b\u6837\u5f0f"],["pre",{lang:null,highlighted:'\t```js\n\t<span class="token function">for</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> simpleStyleProps<span class="token punctuation">)</span> {\n\t\t<span class="token operator">/</span><span class="token operator">/</span> \u7b80\u6613\u6837\u5f0f\u7684 api \u540d\u79f0\n\t\tlet oneSimpleStyleApi <span class="token operator">=</span> key<span class="token comment" spellcheck="true">;</span>\n\t\tlet oneSimpleStyle <span class="token operator">=</span> simpleStyleProps<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\t\t<span class="token operator">/</span><span class="token operator">/</span> \u8be5 api \u5bf9\u5e94 baseStyle \u91cc\u7684\u54ea\u4e2a\u5c5e\u6027\n\t\tlet whichObj <span class="token operator">=</span> baseStyle<span class="token punctuation">[</span>oneSimpleStyle<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\t\t<span class="token operator">/</span><span class="token operator">/</span> baseStyle \u91cc\u7684\u90a3\u4e2a\u5c5e\u6027\u7684\u54ea\u4e2a\u503c\n\t\tlet whichAttr <span class="token operator">=</span> whichObj<span class="token punctuation">[</span>oneSimpleStyle<span class="token punctuation">.</span>attr<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\t}\n\t```'},["code","\t```js\n\tfor(key in simpleStyleProps) {\n\t\t// \u7b80\u6613\u6837\u5f0f\u7684 api \u540d\u79f0\n\t\tlet oneSimpleStyleApi = key;\n\t\tlet oneSimpleStyle = simpleStyleProps[key];\n\t\t// \u8be5 api \u5bf9\u5e94 baseStyle \u91cc\u7684\u54ea\u4e2a\u5c5e\u6027\n\t\tlet whichObj = baseStyle[oneSimpleStyle.name];\n\t\t// baseStyle \u91cc\u7684\u90a3\u4e2a\u5c5e\u6027\u7684\u54ea\u4e2a\u503c\n\t\tlet whichAttr = whichObj[oneSimpleStyle.attr];\n\t}\n\t```"]]]],["p","\u4f8b\u5982\u4e0a\u9762\u5b9a\u4e49\u7684 Button \u7ec4\u4ef6\uff0c\u901a\u8fc7\uff1a"],["pre",{lang:"js",highlighted:'\t<span class="token keyword">static</span> simpleStyleProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t\ttextSize<span class="token punctuation">:</span> <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'text\'</span><span class="token punctuation">,</span> attr<span class="token punctuation">:</span> <span class="token string">\'fontSize\'</span> <span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>'},["code","\tstatic simpleStyleProps = {\n\t\ttextSize: { name: 'text', attr: 'fontSize' }\n\t}"]],["p","\u5b9a\u4e49\u4e86\u7b80\u6613\u6837\u5f0fapi \uff1atextSize"],["p","\u90a3\u4e48\u4f7f\u7528\u8005\u5c31\u53ef\u4ee5\u4f7f\u7528 textSize \u4f5c\u4e3a Button \u7684 props\uff0c\u5f53\u4f7f\u7528 ",["code","<Button textSize={32} />"]," \u65f6\uff0c\u610f\u5473\u7740\u6837\u5f0f\u91cc\u7684text\u6837\u5f0f(\u7531simpleStyleProps.textSize.name\u6307\u5b9a)\u4e2d\u7684fontSize\u5c5e\u6027(simpleStyleProps.textSize.attr)\u88ab\u8bbe\u7f6e\u6210\u4e86 32"]],meta:{filename:"components/ui/STYLE.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#fego-rn-\u7ec4\u4ef6\u5e93",title:"fego-rn \u7ec4\u4ef6\u5e93"},"fego-rn \u7ec4\u4ef6\u5e93"]],["li",["a",{className:"bisheng-toc-h2",href:"#UI-\u7ec4\u4ef6\u6837\u5f0f\u8bbe\u8ba1\u89c4\u5219",title:"UI \u7ec4\u4ef6\u6837\u5f0f\u8bbe\u8ba1\u89c4\u5219"},"UI \u7ec4\u4ef6\u6837\u5f0f\u8bbe\u8ba1\u89c4\u5219"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u6837\u5f0f",title:"\u7ec4\u4ef6\u6837\u5f0f"},"\u7ec4\u4ef6\u6837\u5f0f"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u6837\u5f0f\u8bf4\u660e\u793a\u4f8b\uff1a",title:"\u6837\u5f0f\u8bf4\u660e\u793a\u4f8b\uff1a"},"\u6837\u5f0f\u8bf4\u660e\u793a\u4f8b\uff1a"]],["li",["a",{className:"bisheng-toc-h3",href:"#simpleStyleProps",title:"simpleStyleProps"},"simpleStyleProps"]]]}}});