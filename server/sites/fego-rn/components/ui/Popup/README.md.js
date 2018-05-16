webpackJsonp([16],{488:function(t,n){t.exports={content:["article",["h1","\u5f39\u51fa\u5c42 Popup"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["ul",["li",["p","\u4ece\u9876\u90e8\u6216\u5e95\u90e8\u6d6e\u51fa\u7684\u6a21\u6001\uff0c\u63d0\u4f9b\u6807\u9898\u548c\u5173\u95ed\u6309\u94ae\uff0c\u5c55\u793a\u548c\u5f53\u524d\u5185\u5bb9\u76f8\u5173\u7684\u4fe1\u606f\u6216\u63d0\u4f9b\u76f8\u5173\u64cd\u4f5c\u3002\n\u63d0\u4f9b\u57fa\u7840\u7684\u6807\u9898\u5934\uff0c\u5185\u5bb9\u533a\u5219\u4f7f\u7528children\u6307\u5b9a\u3002"]]],["h3","\u793a\u4f8b\u4ee3\u7801"],["pre",{lang:"html",highlighted:'// \u4f7f\u7528 api \u65b9\u5f0f\u8c03\u7528 popup\nlet SelfView = (\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span>{{</span> <span class="token attr-name"><span class="token namespace">padding:</span></span> <span class="token attr-name">10</span> <span class="token attr-name">}}</span> <span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>Api\u547d\u4ee4\u65b9\u5f0f\u8c03\u7528\uff0cPopup\u5c06\u5904\u4e8e\u9876\u5c42View\uff0c\u906e\u76d6\u5bfc\u822a\u6761<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n\t\t&lt;Button type="primary" title="\u70b9\u6211\u5173\u95ed" onPress={() => Popup.hide()} />\n\t\t&lt;Button type="primary" title="\u4e0b\u4e00\u4e2aPopup" onPress={() => this._popShow()} />\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n)\nPopup.show(SelfView, {\n\ttitle: `Popup example`,\n\theaderLeft: true,\n\taniFrom: \'bottom\',\n\tonClose: () => {\n\t},\n\tonAniEnd: (visible) => {\n\t}\n})\n\n// \u4f7f\u7528\u7ec4\u4ef6\u65b9\u5f0f\u8c03\u7528 Popup\n&lt;Popup\n\ttitle={title}\n\tvisible={this.state.visible}\n\tlocation={location}\n\taniFrom={aniFrom}\n\tonClose={() => this.setState({ visible: false })} \n>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>\u4ece\u9876\u90e8\u6216\u5e95\u90e8\u6d6e\u51fa\u7684\u6a21\u6001\uff0c\u63d0\u4f9b\u6807\u9898\u548c\u5173\u95ed\u6309\u94ae\uff0c\u5c55\u793a\u548c\u5f53\u524d\u5185\u5bb9\u76f8\u5173\u7684\u4fe1\u606f\u6216\u63d0\u4f9b\u76f8\u5173\u64cd\u4f5c\u3002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Text</span><span class="token punctuation">></span></span>\u63d0\u4f9b\u57fa\u7840\u7684\u6807\u9898\u5934\uff0c\u5185\u5bb9\u533a\u5219\u4f7f\u7528children\u6307\u5b9a\u3002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Text</span><span class="token punctuation">></span></span>\n\t\t&lt;Button type="primary" title="\u70b9\u6211\u5173\u95ed" onPress={() => this.setState({ visible: false })}/>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popup</span><span class="token punctuation">></span></span>'},["code",'// \u4f7f\u7528 api \u65b9\u5f0f\u8c03\u7528 popup\nlet SelfView = (\n\t<View style={{ padding: 10 }} >\n\t\t<Text>Api\u547d\u4ee4\u65b9\u5f0f\u8c03\u7528\uff0cPopup\u5c06\u5904\u4e8e\u9876\u5c42View\uff0c\u906e\u76d6\u5bfc\u822a\u6761</Text>\n\t\t<Button type="primary" title="\u70b9\u6211\u5173\u95ed" onPress={() => Popup.hide()} />\n\t\t<Button type="primary" title="\u4e0b\u4e00\u4e2aPopup" onPress={() => this._popShow()} />\n\t</View>\n)\nPopup.show(SelfView, {\n\ttitle: `Popup example`,\n\theaderLeft: true,\n\taniFrom: \'bottom\',\n\tonClose: () => {\n\t},\n\tonAniEnd: (visible) => {\n\t}\n})\n\n// \u4f7f\u7528\u7ec4\u4ef6\u65b9\u5f0f\u8c03\u7528 Popup\n<Popup\n\ttitle={title}\n\tvisible={this.state.visible}\n\tlocation={location}\n\taniFrom={aniFrom}\n\tonClose={() => this.setState({ visible: false })} \n>\n\t<View>\n\t\t<Text>\u4ece\u9876\u90e8\u6216\u5e95\u90e8\u6d6e\u51fa\u7684\u6a21\u6001\uff0c\u63d0\u4f9b\u6807\u9898\u548c\u5173\u95ed\u6309\u94ae\uff0c\u5c55\u793a\u548c\u5f53\u524d\u5185\u5bb9\u76f8\u5173\u7684\u4fe1\u606f\u6216\u63d0\u4f9b\u76f8\u5173\u64cd\u4f5c\u3002</Text>\n\t\t<Text>\u63d0\u4f9b\u57fa\u7840\u7684\u6807\u9898\u5934\uff0c\u5185\u5bb9\u533a\u5219\u4f7f\u7528children\u6307\u5b9a\u3002</Text>\n\t\t<Button type="primary" title="\u70b9\u6211\u5173\u95ed" onPress={() => this.setState({ visible: false })}/>\n\t</View>\n</Popup>']],["h2","API"],["h3","api \u63a5\u53e3\uff1a"],["h3","static show(el, opt)"],["p","\u663e\u793a\u4e00\u4e2aPopup\uff0c\u4f4d\u4e8e\u9876\u5c42View\uff0ckey\u53ef\u4ee5\u7531opt\u8986\u76d6\u6765\u6307\u5b9a"],["ul",["li",["p","el \u3010\u5fc5\u987b\u3011\u9700\u8981\u5728 Popup \u91cc\u663e\u793a\u7684\u5185\u5bb9\u5143\u7d20"]],["li",["p","opt \u914d\u7f6e\u5bf9\u8c61\u540c Popup \u7684 props\uff0c",["strong","\u53ef\u4f7f\u7528key\u552f\u4e00\u6807\u8bb0"]]]],["h3","static hide(key, hasAni)"],["p","\u5173\u95ed\u4e00\u4e2a Popup\uff0c\u9ed8\u8ba4\u5173\u95ed\u6700\u4e0a\u5c42 Popup "],["ul",["li",["p","key \u82e5\u6307\u5b9a key\uff0c\u5219\u5173\u95ed\u5bf9\u5e94 key \u7684 Popup"]],["li",["p","hasAni \u5173\u95ed\u65f6\u662f\u5426\u52a8\u753b\uff0c\u9ed8\u8ba4 true"]]],["h3","static hideAll(hasAni)"],["p","\u9690\u85cf\u6240\u6709  ",["strong","\u6b64\u65f6\u4e0d\u518d\u54cd\u5e94onClose\uff0c\u5426\u5219\u8bf7\u4f7f\u7528hide"]],["ul",["li",["p","hasAni \u5173\u95ed\u65f6\u662f\u5426\u52a8\u753b\uff0c\u9ed8\u8ba4true"]]],["h3","props\u5217\u8868"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","visible"],["td","\u53d7\u63a7\u5c5e\u6027\uff1a\u662f\u5426\u53ef\u89c1"],["td","boolean"],["td","false"]],["tr",["td","aniIn"],["td","\u52a8\u753b\u8fdb\u5165\u65b9\u5411 'left', 'right', 'top', 'bottom'"],["td","string"],["td","bottom"]],["tr",["td","aniOut"],["td","\u52a8\u753b\u63a8\u51fa\u65b9\u5411\uff0c\u9ed8\u8ba4\u53d6aniIn\u7684\u503c"],["td","string"],["td"]],["tr",["td","aniOutFn"],["td","\u52a8\u753b\u63a8\u51fa\u65b9\u5411\uff0c\u81ea\u5b9a\u4e49\u51fd\u6570\uff0c\u9700\u8fd4\u56de\u503c\u53c2\u8003 aniOut\uff1baniOutFn(closeType, this)"],["td","function"],["td"]],["tr",["td","location"],["td","\u5185\u5bb9\u533a\u4f4d\u7f6e 'top', 'bottom'"],["td","string"],["td","'bottom'"]],["tr",["td","title"],["td","header\u6807\u9898\uff0c\u4e0d\u4f20\u5219\u4e0d\u663e\u793a\u6807\u9898\u680f"],["td","string,node,element"],["td"]],["tr",["td","headerLeft"],["td","\u5934\u90e8\u5de6\u4fa7\u533a\uff0cfalse\u4e3a\u5173\u95ed\uff0c\u4e5f\u53ef\u4f20\u5165\u81ea\u5b9a\u4e49\u5143\u7d20\uff0c\u5b57\u7b26\u4e32"],["td","any"],["td","false"]],["tr",["td","headerRight"],["td","\u5934\u90e8\u53f3\u4fa7\u533a\uff0cfalse\u4e3a\u5173\u95ed\uff0c\u4e5f\u53ef\u53ef\u4f20\u5165\u81ea\u5b9a\u4e49\u5143\u7d20\uff0c\u5b57\u7b26\u4e32"],["td","any"],["td","true"]],["tr",["td","iconFamily"],["td","\u56fe\u6807\u5b57\u4f53\u5e93\u540d\u79f0"],["td","string"],["td"]],["tr",["td","iconTypes"],["td","\u56fe\u6807\u914d\u7f6e"],["td","object"],["td","{ 'headerLeft': 'angle-left', 'headerRight': 'times-circle' }"]],["tr",["td","offsetHeight"],["td","\u9ad8\u5ea6\u504f\u79fb\u91cf\uff0c\u6574\u4f53\u9ad8\u5ea6\u4f1a\u51cf\u6389\u8be5\u9ad8\u5ea6\u3002\u4e00\u822c\u662f\u5bfc\u822a\u680f\u7684\u9ad8\u5ea6\u3002"],["td","number"],["td"]],["tr",["td","aniTime"],["td","\u52a8\u753b\u65f6\u95f4\uff0c\u6beb\u79d2"],["td","number"],["td","300"]],["tr",["td","maskOpacity"],["td","\u906e\u7f69\u900f\u660e\u5ea6"],["td","number"],["td","0.7"]],["tr",["td","onClose"],["td","\u7ec4\u4ef6\u5173\u95ed\u7684\u56de\u8c03"],["td","function"],["td"]],["tr",["td","onAniEnd"],["td","\u7ec4\u4ef6\u52a8\u753b\u7ed3\u675f\u7684\u56de\u8c03"],["td","function"],["td"]]]],["h3","\u6837\u5f0f\u5bf9\u8c61styles"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u9002\u7528\u7c7b\u578b"]]],["tbody",["tr",["td","container"],["td","\u6309\u94ae\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","mask"],["td","\u906e\u7f69"],["td","View"]],["tr",["td","absolute"],["td","\u7edd\u5bf9\u5b9a\u4f4d\u6837\u5f0f"],["td","View"]],["tr",["td","body"],["td","\u4e3b\u4f53\u533a\u57df"],["td","View"]],["tr",["td","header"],["td","\u5934\u90e8\u5bb9\u5668"],["td","View"]],["tr",["td","headerTitle"],["td","\u5934\u90e8\u6807\u9898"],["td","Text"]],["tr",["td","headerLeft"],["td","\u5934\u90e8\u5de6\u4fa7\u533a\u57df\u5bb9\u5668"],["td","View"]],["tr",["td","headerRight"],["td","\u5934\u90e8\u53f3\u4fa7\u533a\u57df\u5bb9\u5668"],["td","View"]],["tr",["td","headerLeftCtn"],["td","\u5934\u90e8\u5de6\u4fa7\u5185\u5bb9"],["td","Text"]],["tr",["td","headerRightCtn"],["td","\u5934\u90e8\u53f3\u4fa7\u5185\u5bb9"],["td","Text"]]]]],meta:{title:"Popup",subTitle:"\u5f39\u51fa\u5c42",filename:"components/ui/Popup/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#\u5f39\u51fa\u5c42-Popup",title:"\u5f39\u51fa\u5c42 Popup"},"\u5f39\u51fa\u5c42 Popup"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u793a\u4f8b\u4ee3\u7801",title:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h3",href:"#api-\u63a5\u53e3\uff1a",title:"api \u63a5\u53e3\uff1a"},"api \u63a5\u53e3\uff1a"]],["li",["a",{className:"bisheng-toc-h3",href:"#static-show(el,-opt)",title:"static show(el, opt)"},"static show(el, opt)"]],["li",["a",{className:"bisheng-toc-h3",href:"#static-hide(key,-hasAni)",title:"static hide(key, hasAni)"},"static hide(key, hasAni)"]],["li",["a",{className:"bisheng-toc-h3",href:"#static-hideAll(hasAni)",title:"static hideAll(hasAni)"},"static hideAll(hasAni)"]],["li",["a",{className:"bisheng-toc-h3",href:"#props\u5217\u8868",title:"props\u5217\u8868"},"props\u5217\u8868"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u6837\u5f0f\u5bf9\u8c61styles",title:"\u6837\u5f0f\u5bf9\u8c61styles"},"\u6837\u5f0f\u5bf9\u8c61styles"]]]}}});