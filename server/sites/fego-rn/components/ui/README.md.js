webpackJsonp([14],{490:function(n,t){n.exports={content:["article",["h2","UI\u7c7b\u7ec4\u4ef6"],["blockquote",["p","\u7ee7\u627f Component \u7684\u7eafRN\u7ec4\u4ef6"]],["h3","\u57fa\u672c\u8981\u6c42"],["ol",["li",["p","\u7ec4\u4ef6\u7684\u6837\u5f0f\u53ef\u914d"]],["li",["p","\u7ec4\u4ef6props\u7c7b\u578b\u68c0\u67e5"]],["li",["p","\u9075\u5b88\u7ec4\u4ef6API\u5b57\u5178\u7ea6\u675f"]],["li",["p","\u9075\u5b88\u53d7\u63a7/\u975e\u63a7\u7ec4\u4ef6\u7684\u5b9a\u4e49 \u53c2\u89c1",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html"},"https://facebook.github.io/react/docs/forms.html"]]]],["h3","\u53d7\u63a7/\u975e\u63a7\u7ec4\u4ef6"],["ul",["li",["p","\u53d7\u63a7\u5c5e\u6027 \u9700\u914d\u5408onChange\u4f7f\u7528\u4ee5\u4fdd\u8bc1props\u4f20\u5165\u6570\u636e\u6d41\u7684\u4e00\u81f4\u6027 \u4f8b\u5982 value\uff0cvisible\u7b49"]],["li",["p","\u975e\u63a7\u5c5e\u6027 \u4ee5default\u5f00\u5934\uff0c\u6b64\u65f6\u53ea\u5f71\u54cd\u521d\u59cb\u72b6\u6001\uff0c\u8be5\u72b6\u6001\u4e4b\u540e\u5c06\u4e0d\u53d7\u5916\u90e8props\u7684\u63a7\u5236\uff0c\u7ec4\u4ef6\u81ea\u5df1\u66f4\u65b0\u72b6\u6001\u3002\u4f8b\u5982 defaultValue,defaultVisible\u7b49"]]],["h3","\u6837\u5f0f\u4f18\u5148\u7ea7"],["p","\u4e0b\u9762\u4f18\u5148\u7ea7\u7531\u4f4e\u5230\u9ad8"],["blockquote",["p","\u4f18\u5148\u7ea7\uff1abaseStyle < themeStyle < styles < style < propStyle < simpleStyle"]],["ol",["li",["p","baseStyle \u7ec4\u4ef6\u57fa\u7840\u6837\u5f0f\u3010\u5fc5\u987b\u3011,\u53ef\u4ee5\u901a\u8fc7setBaseStyle\u8fdb\u884c\u5168\u5c40\u53d8\u66f4,\u683c\u5f0f:"]]],["pre",{lang:null,highlighted:'{  \n\tstyleName1<span class="token punctuation">:</span>{\n\t\tstylePropsName<span class="token punctuation">:</span>stylePropsValue<span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t}<span class="token punctuation">,</span>\n\tstyleName2<span class="token punctuation">:</span>{\n\t\tstylePropsName<span class="token punctuation">:</span>stylePropsValue<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t}\n}'},["code","{  \n\tstyleName1:{\n\t\tstylePropsName:stylePropsValue,\n\t\t\t...\n\t},\n\tstyleName2:{\n\t\tstylePropsName:stylePropsValue,\n\t\t...\n\t}\n}"]],["ol",["li",["p","themeStyle \u81ea\u5b9a\u4e49\u4e3b\u9898\u6837\u5f0f\uff0c\u5982\u5b57\u4f53\u79cd\u7c7b1\u30012\u30013\uff0c\u6309\u94ae\u79cd\u7c7b1\u30012\u30013,\u53ef\u4ee5\u901a\u8fc7setThemeStyle\u8fdb\u884c\u5168\u5c40\u53d8\u66f4,\u662f\u5bf9baseStyle\u7684\u4e00\u79cd\u7ec4\u5408,\u683c\u5f0f:"]]],["pre",{lang:null,highlighted:'   {\n\t   themeName<span class="token punctuation">:</span>{\n\t\t   styleName1<span class="token punctuation">:</span>{\n\t\t\t   stylePropsName<span class="token punctuation">:</span>stylePropsValue<span class="token punctuation">,</span>\n\t\t\t   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t\t\t}<span class="token punctuation">,</span>\n\t\t   styleName2<span class="token punctuation">:</span>{\n\t\t\t   stylePropsName<span class="token punctuation">:</span>stylePropsValue<span class="token punctuation">,</span>\n\t\t\t   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t\t   }<span class="token punctuation">,</span>\n\t\t   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t\t}<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t}'},["code","   {\n\t   themeName:{\n\t\t   styleName1:{\n\t\t\t   stylePropsName:stylePropsValue,\n\t\t\t   ...\n\t\t\t},\n\t\t   styleName2:{\n\t\t\t   stylePropsName:stylePropsValue,\n\t\t\t   ...\n\t\t   },\n\t\t   ...\n\t\t},\n\t\t...\n\t}"]],["ol",["li",["p","props.styles \u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u6837\u5f0f\u7c7b,\u662f\u5bf9props.style\u7684\u4e00\u79cd\u7ec4\u5408\n\u683c\u5f0f:\n{\n\t\t   container:{\n\t\t\t   stylePropsName:stylePropsValue,\n\t\t   },\n\t\t   styleName:{\n\t\t\t   stylePropsName:stylePropsValue,\n\t\t   },\n\t\t   ...\n\t\t}"]],["li",["p","props.style \u5bb9\u5668\u6837\u5f0f\u7b49\u6548\u4e8estyles.container,\u9ed8\u8ba4\u6837\u5f0f\u5c5e\u6027"]],["li",["p","propStyle \u4ee5Style\u4e3a\u540e\u7f00\u7684prop\uff0c\u4f8b\u5982 props.contentStyle"]],["li",["p","simpleStyle \u7b80\u6613\u6837\u5f0f \u4f8b\u5982 props.tipColor,\n\u9700\u8981\u5728\u7ec4\u4ef6\u5b9a\u4e49\u7684\u65f6\u5019\u9884\u5148\u58f0\u660e\u597dsimpleStyleProps\n\u7531prop.styles\u5f15\u7533\u7684\u4e00\u79cd\u5199\u6cd5"]]],["h4","\u6ce8\u610f"],["ol",["li",["p","\u7ec4\u4ef6\u9759\u6001\u5c5e\u6027propTypes\u4e2d\u4e0d\u9700\u8981\u58f0\u660e\u6837\u5f0f\u76f8\u5173\u7684props"]],["li",["p","\u7b80\u6613\u6837\u5f0fsimpleStyle \u7531\u9759\u6001\u5c5e\u6027simpleStyleProps\u5b9a\u4e49"]]],["h3","\u57fa\u672c\u6a21\u677f"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">/**\n * \u7ec4\u4ef6\u540d\u79f0\n * @author \u59d3\u540d \n */</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> View<span class="token punctuation">,</span> Text <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span>\n<span class="token keyword">import</span> UIComponent <span class="token keyword">from</span> <span class="token string">\'path to UIComponent\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">SelfMod</span> <span class="token keyword">extends</span> <span class="token class-name">UIComponent</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token comment" spellcheck="true">// \u521d\u59cb\u5316\u5c5e\u6027</span>\n\tstate <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">let</span> style <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>style<span class="token punctuation">;</span>\n\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment" spellcheck="true">// \u57fa\u7840\u6837\u5f0f</span>\nSelfMod<span class="token punctuation">.</span>baseStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tcontainer<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","/**\n * \u7ec4\u4ef6\u540d\u79f0\n * @author \u59d3\u540d \n */\nimport React from 'react'\nimport { View, Text } from 'react-native'\nimport UIComponent from 'path to UIComponent'\n\nexport default class SelfMod extends UIComponent {\n\tstatic defaultProps = {\n\t}\n\tstatic propTypes = {\n\t}\n\t// \u521d\u59cb\u5316\u5c5e\u6027\n\tstate = {}\n\n\trender() {\n\t\tlet style = this.style;\n\n\t}\n}\n// \u57fa\u7840\u6837\u5f0f\nSelfMod.baseStyle = {\n\tcontainer: {\n\t},\n};"]],["h3","\u7ee7\u627fUIComponent\u7684\u7ec4\u4ef6"],["h4","props\u5217\u8868"],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u7c7b\u578b"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td",["code","style"]],["td","object"],["td","\u5bb9\u5668\u6837\u5f0f\u5bf9\u8c61\u7b49\u6548\u4e8estyles.container"]],["tr",["td",["code","styles"]],["td","object"],["td","\u81ea\u5b9a\u4e49\u6837\u5f0f\u5bf9\u8c61"]],["tr",["td","prop",["code","Style"]],["td","object"],["td","\u4ee5Style\u4e3a\u540e\u7f00\u7684prop\uff0c\u4f8b\u5982 props.contentStyle"]],["tr",["td","simpleStyle"],["td","any"],["td","\u7b80\u6613\u6837\u5f0f\u56e0\u7ec4\u4ef6\u58f0\u660e\u800c\u4e0d\u540c \u4f8b\u5982 props.tipColor"]]]]],meta:{filename:"components/ui/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#UI\u7c7b\u7ec4\u4ef6",title:"UI\u7c7b\u7ec4\u4ef6"},"UI\u7c7b\u7ec4\u4ef6"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u57fa\u672c\u8981\u6c42",title:"\u57fa\u672c\u8981\u6c42"},"\u57fa\u672c\u8981\u6c42"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u53d7\u63a7/\u975e\u63a7\u7ec4\u4ef6",title:"\u53d7\u63a7/\u975e\u63a7\u7ec4\u4ef6"},"\u53d7\u63a7/\u975e\u63a7\u7ec4\u4ef6"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u6837\u5f0f\u4f18\u5148\u7ea7",title:"\u6837\u5f0f\u4f18\u5148\u7ea7"},"\u6837\u5f0f\u4f18\u5148\u7ea7"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u6ce8\u610f",title:"\u6ce8\u610f"},"\u6ce8\u610f"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u57fa\u672c\u6a21\u677f",title:"\u57fa\u672c\u6a21\u677f"},"\u57fa\u672c\u6a21\u677f"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ee7\u627fUIComponent\u7684\u7ec4\u4ef6",title:"\u7ee7\u627fUIComponent\u7684\u7ec4\u4ef6"},"\u7ee7\u627fUIComponent\u7684\u7ec4\u4ef6"]],["li",["a",{className:"bisheng-toc-h4",href:"#props\u5217\u8868",title:"props\u5217\u8868"},"props\u5217\u8868"]]]}}});