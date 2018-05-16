webpackJsonp([32],{472:function(t,e){t.exports={content:["article",["h1","Carousel\uff08\u8f6e\u64ad\u56fe\uff09"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["ul",["li",["p","\u8f6e\u64ad\u7ec4\u4ef6\uff0c\u5bf9\u4e8e\u4e00\u7ec4\u5185\u5bb9\uff0c\u53ef\u4ee5\u7528\u8d70\u9a6c\u706f\u7684\u5f62\u5f0f\u8fdb\u884c\u8f6e\u64ad\u5c55\u73b0\u3002"]]],["h3","\u793a\u4f8b\u4ee3\u7801"],["pre",{lang:"html",highlighted:'import Carousel from \'Carousel\'\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Carousel</span> <span class="token attr-name">{...someProps}</span> <span class="token punctuation">></span></span>\n\t{carousel contents}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Carousel</span><span class="token punctuation">></span></span>'},["code","import Carousel from 'Carousel'\n\n<Carousel {...someProps} >\n\t{carousel contents}\n</Carousel>"]],["h2","API"],["h3","props\u5217\u8868"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td",["code","mode"]],["td","\u52a0\u8f7d\u6a21\u5f0f\uff08all\u3001preload\uff09,\u9884\u52a0\u8f7d\u6a21\u5f0f\u4e0b\u5b89\u5353\u4e0a\u4f1a\u95ea\uff0c\u6240\u4ee5\u5b89\u5353\u673a\u4e0a\u53ea\u80fd\u4f7f\u7528\u5168\u5bb6\u8f7d\u6a21\u5f0f\uff0c\u800c\u4e14\u56e0\u4e3a\u9884\u52a0\u8f7d\u6a21\u5f0f\u4e0b\u6bcf\u6b21\u8f6e\u64ad\u6eda\u52a8\u89e6\u53d1\u7684\u64cd\u4f5c\u8f83\u591a\uff0c\u5c5e\u4e8e\u4ee5\u65f6\u95f4\u6362\u7a7a\u95f4\uff0c\u6240\u4ee5\u5728\u8f6e\u64ad\u9875\u6570\u4e0d\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u4f7f\u7528\u5168\u52a0\u8f7d\u6a21\u5f0f"],["td",["code","string"]],["td","all"]],["tr",["td",["code","childrenType"]],["td","\u5b50view\u7c7b\u578b\uff08image\u3001custom\uff09"],["td",["code","string"]],["td","image"]],["tr",["td",["code","size"]],["td","\u8f6e\u64ad\u56fe\u5927\u5c0f"],["td",["code","object"]],["td","{width:screenWidth, height:screenWidth* 180/375}"]],["tr",["td",["code","source"]],["td","\u8d44\u6e90\u6587\u4ef6\uff0c\u5f53childrenType\u4e3aimage\u65f6\uff0c\u4f7f\u7528\u8be5\u5c5e\u6027\u4e2d\u7684\u56fe\u7247\u8d44\u6e90\u4f5c\u4e3a\u8f6e\u64ad\u56fe\u5185\u5bb9"],["td","array"],["td","[]"]],["tr",["td",["code","defaultPage"]],["td","\u5f00\u59cb\u64ad\u653e\u7684\u9875\u6570"],["td",["code","number"]],["td","0"]],["tr",["td",["code","direction"]],["td","\u663e\u793a\u65b9\u5411"],["td",["code","string"]],["td","horizontal"]],["tr",["td",["code","autoplay"]],["td","\u662f\u5426\u81ea\u52a8\u64ad\u653e"],["td",["code","boolean"]],["td","true"]],["tr",["td",["code","interval"]],["td","\u64ad\u653e\u95f4\u9694\u7684\u6beb\u79d2\u6570"],["td",["code","number"]],["td","300"]],["tr",["td",["code","infinite"]],["td","\u662f\u5426\u65e0\u9650\u5faa\u73af\u64ad\u653e"],["td",["code","boolean"]],["td","true"]],["tr",["td",["code","showDot"]],["td","\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9"],["td",["code","boolean"]],["td","true"]],["tr",["td",["code","dotType"]],["td","\u6307\u793a\u70b9\u6837\u5f0f\uff0c\u9ed8\u8ba4\u5706\u5f62\u3002\u53ef\u9009\u503c\uff1a'circle', 'rect'"],["td",["code","string"]],["td","circle"]],["tr",["td",["code","showPagination"]],["td","\u662f\u5426\u663e\u793a\u5206\u9875\u4fe1\u606f, \u9ed8\u8ba4\u4e0d\u663e\u793a"],["td",["code","boolean"]],["td","false"]],["tr",["td",["code","paginationSeparator"]],["td","\u5206\u9694\u7b26"],["td",["code","string"]],["td","/"]],["tr",["td",["code","preLoadPageCount"]],["td","\u9884\u52a0\u8f7d\u9875\u6570\uff0c\u5f53mode\u4e3a",["code","preload"],"\u65f6\u52a0\u8f7d\u7684\u9875\u6570\uff0c\u503c\u9700\u8981\u5927\u4e8e2"],["td",["code","number"]],["td","5"]],["tr",["td",["code","showArrows"]],["td","\u5de6\u53f3\u7ffb\u52a8\u6309\u94ae"],["td",["code","boolean"]],["td","false"]],["tr",["td",["code","leftArrow"]],["td","\u5de6\u6309\u94ae"],["td",["code","string"],"\u6216",["code","element"]],["td","<"]],["tr",["td",["code","rightArrow"]],["td","\u53f3\u6309\u94ae"],["td",["code","string"],"\u6216",["code","element"]],["td",">"]]]],["h3","\u6837\u5f0f\u5bf9\u8c61styles"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u9002\u7528\u7c7b\u578b"]]],["tbody"]],["h3","\u652f\u6301\u7684\u4e8b\u4ef6"],["table",["thead",["tr",["th","\u5c5e\u6027props"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td",["code","onPress"]],["td",["code","function(pageIdx)"]],["td","-"],["td","\u70b9\u51fb\u4e86\u7b2c\u51e0\u9875"]],["tr",["td",["code","onShouldChange"]],["td",["code","function(fromPage, toPage)"]],["td","-"],["td","\u5207\u6362\u9762\u677f\u524d\u7684\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de false \u6765\u963b\u6b62\u8f6e\u64ad"]],["tr",["td",["code","onChange"]],["td",["code","function(page)"]],["td","-"],["td","\u5207\u6362\u9762\u677f\u540e\u7684\u56de\u8c03\u51fd\u6570\uff0c\u53c2\u6570\u4e3a\u5207\u6362\u540e\u7684 index (0 \u5f00\u59cb\u8ba1\u7b97)"]],["tr",["td",["code","onScrollBeginDrag"]],["td",["code","function(event)"]],["td","-"],["td","\u5f00\u59cb\u62d6\u62fd\u65f6\u7684\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u4e8b\u4ef6\u5bf9\u8c61"]]]]],meta:{title:"Carousel",subTitle:"\u8f6e\u64ad\u56fe",filename:"components/ui/Carousel/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#Carousel\uff08\u8f6e\u64ad\u56fe\uff09",title:"Carousel\uff08\u8f6e\u64ad\u56fe\uff09"},"Carousel\uff08\u8f6e\u64ad\u56fe\uff09"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u793a\u4f8b\u4ee3\u7801",title:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h3",href:"#props\u5217\u8868",title:"props\u5217\u8868"},"props\u5217\u8868"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u6837\u5f0f\u5bf9\u8c61styles",title:"\u6837\u5f0f\u5bf9\u8c61styles"},"\u6837\u5f0f\u5bf9\u8c61styles"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u652f\u6301\u7684\u4e8b\u4ef6",title:"\u652f\u6301\u7684\u4e8b\u4ef6"},"\u652f\u6301\u7684\u4e8b\u4ef6"]]]}}});