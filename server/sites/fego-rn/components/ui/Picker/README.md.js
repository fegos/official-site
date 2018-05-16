webpackJsonp([19],{485:function(t,e){t.exports={content:["article",["h1","\u9009\u62e9\u5668 Picker"],["h3","\u7ec4\u4ef6\u63cf\u8ff0"],["ul",["li",["p","\u6a21\u6001\u91cc\u7684\u9009\u62e9\u5668"]]],["h3","\u793a\u4f8b\u4ee3\u7801"],["pre",{lang:"html",highlighted:"&lt;Picker\n\t\tdata={pickerData3}\n\t\tvisible={this.state.picker3Visible}\n\t\tonClose={()=>{this.setState({picker3Visible:false})}}\n\t\tinitialValue={['chuancai','jiachang','yu']}\n\t\tonConfirm={(selectedValue, selectedIndex, selectedLabel) => {\n\t\t\tconsole.log('onConfirm: ', selectedValue, selectedIndex, selectedLabel)\n\t\t\tthis.setState({ picker3Value: selectedLabel.join('') })\n\t\t}}\n\t\tonChange={(selectedValue, selectedIndex, selectedLabel) => {\n\t\t\tconsole.log('onChange: ', selectedValue, selectedIndex, selectedLabel)\n\t\t}}\n/>"},["code","<Picker\n\t\tdata={pickerData3}\n\t\tvisible={this.state.picker3Visible}\n\t\tonClose={()=>{this.setState({picker3Visible:false})}}\n\t\tinitialValue={['chuancai','jiachang','yu']}\n\t\tonConfirm={(selectedValue, selectedIndex, selectedLabel) => {\n\t\t\tconsole.log('onConfirm: ', selectedValue, selectedIndex, selectedLabel)\n\t\t\tthis.setState({ picker3Value: selectedLabel.join('') })\n\t\t}}\n\t\tonChange={(selectedValue, selectedIndex, selectedLabel) => {\n\t\t\tconsole.log('onChange: ', selectedValue, selectedIndex, selectedLabel)\n\t\t}}\n/>"]],["h3","\u8bf4\u660e"],["blockquote",["p","Picker \u7684\u5b9e\u73b0\u4f9d\u8d56\u4e8e PickerView, \u5c06 PickerView \u653e\u5728\u6a21\u6001\u91cc\u9762\uff0c\u56e0\u6b64\u5176\u90e8\u5206 props (eg:initialValue, onChange) \u4ee5\u53ca\u6570\u636e\u6e90 data \u7684\u542b\u4e49\u90fd\u4e0e PickerView \u4e00\u81f4"]],["h2","API"],["h3","props\u5217\u8868"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","modal"],["td","\u662f\u5426\u6a21\u6001"],["td","boolean"],["td","false"]],["tr",["td","mode"],["td","\u9009\u62e9\u5668\u7684\u6a21\u5f0f,\u652f\u6301'dataPicker\uff0cdatePicker'"],["td","string"],["td","dataPicker"]],["tr",["td","datePickerMode"],["td","datePicker\u7684\u6a21\u5f0f\uff0c\u652f\u6301'date\uff0ctime'"],["td","string"],["td","date"]],["tr",["td","dateMode"],["td","date\u7684\u663e\u793a\u6a21\u5f0f \u652f\u6301 'year-only','month-only','day-only','year-month','year-month-day','month-day'"],["td","string"],["td","'year-month-day'"]],["tr",["td","data"],["td","\u9009\u62e9\u5668\u7684\u6570\u636e\u6e90"],["td","array"],["td",["span"," "]]],["tr",["td","minDate"],["td","\u9009\u62e9\u5668\u7684\u6570\u636e\u6e90"],["td","\u6700\u5c0f\u65e5\u671f"],["td",["span"," "]]],["tr",["td","maxDate"],["td","\u9009\u62e9\u5668\u7684\u6570\u636e\u6e90"],["td","\u6700\u5927\u65e5\u671f"],["td",["span"," "]]],["tr",["td","minuteStep"],["td","time\u6a21\u5f0f\u4e0b\u7684\u6b65\u957f"],["td","integer"],["td","1"]],["tr",["td","defaultDateValue"],["td","date\u6a21\u5f0f\u4e0b\u9ed8\u8ba4\u9009\u4e2d\u7684\u65f6\u95f4"],["td","Date"],["td"]],["tr",["td","defaultValue"],["td","picker \u521d\u59cb\u503c\uff0c\u683c\u5f0f\u4e3a",["span","v1, v2, v3"],"\uff0c\u5bf9\u5e94\u6570\u636e\u6e90\u7684\u76f8\u5e94\u7ea7\u5c42value"],["td","array"],["td",["span"," "]]],["tr",["td","onChange"],["td","\u6bcf\u5217\u6570\u636e\u9009\u62e9\u53d8\u5316\u540e\u7684\u56de\u8c03\u51fd\u6570"],["td","Function(selectedValue, selectedIndex, selectedLabel){}"],["td","-"]],["tr",["td","visible"],["td","\u662f\u5426\u53ef\u89c1"],["td","bool"],["td","false"]],["tr",["td","title"],["td","\u6807\u9898"],["td","string"],["td","\u8bf7\u9009\u62e9"]],["tr",["td","okText"],["td","\u786e\u5b9a\u7684\u6587\u6848"],["td","string"],["td","\u786e\u5b9a"]],["tr",["td","cancelText"],["td","\u53d6\u6d88\u7684\u6587\u6848"],["td","string"],["td","\u53d6\u6d88"]],["tr",["td","maskClosable"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed"],["td","string"],["td","true"]],["tr",["td","onClose"],["td","\u5173\u95ed\u5f39\u6846\u7684\u56de\u8c03\u51fd\u6570"],["td","Function(){}"],["td","-"]],["tr",["td","onConfirm"],["td","\u786e\u5b9a\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"],["td","Function(selectedValue, selectedIndex, selectedLabel){}"],["td","-"]]]],["h3","\u6837\u5f0f\u5bf9\u8c61styles"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u9002\u7528\u7c7b\u578b"]]],["tbody",["tr",["td","container"],["td","picker\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","toolbarContainer"],["td","\u5de5\u5177\u6761\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","btn"],["td","\u5de5\u5177\u6761\u6309\u94ae\u57fa\u7840\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","okBtn"],["td","\u786e\u8ba4\u6309\u94ae\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","cancelBtn"],["td","\u53d6\u6d88\u6309\u94ae\u5bb9\u5668\u6837\u5f0f"],["td","View"]],["tr",["td","btnText"],["td","\u6309\u94ae\u5b57\u4f53\u57fa\u7840\u6837\u5f0f"],["td","Text"]],["tr",["td","okText"],["td","\u786e\u5b9a\u6309\u94ae\u5b57\u4f53\u6837\u5f0f"],["td","Text"]],["tr",["td","cancelText"],["td","\u53d6\u6d88\u6309\u94ae\u5b57\u4f53\u6837\u5f0f"],["td","Text"]],["tr",["td","title"],["td","\u6807\u9898\u5b57\u4f53\u6837\u5f0f"],["td","Text"]]]],["h3","props data \u8bf4\u660e"],["h4","\u975e\u7ea7\u8054\u65f6\uff0c\u6bcf\u4e2a\u6570\u7ec4\u8868\u793a\u4e00\u5217\u6570\u636e"],["p","data \u7684\u6570\u636e\u683c\u5f0f\u4e3a ",["code","Array<{value, label}>"]," \u6216 ",["code","Array<Array<{value, label}>>"]," "],["ul",["li",["p","PivkerView \u53ea\u542b\u4e00\u5217\u6570\u636e"]]],["pre",{lang:"html",highlighted:"[{\n\tlabel: '2011\u5e74',\n\tvalue: '2011'\n}, {\n\tlabel: '2012\u5e74',\n\tvalue: '2012'\n}]"},["code","[{\n\tlabel: '2011\u5e74',\n\tvalue: '2011'\n}, {\n\tlabel: '2012\u5e74',\n\tvalue: '2012'\n}]"]],["ul",["li",["p","PivkerView \u542b\u4e24\u5217\u6570\u636e"]]],["pre",{lang:"html",highlighted:"[\n\t[{\n\t\tlabel: '2011\u5e74',\n\t\tvalue: '2011'\n\t}, {\n\t\tlabel: '2012\u5e74',\n\t\tvalue: '2012'\n\t}],\n\n\t[{\n\t\tlabel: '1\u6708',\n\t\tvalue: '1'\n\t}, {\n\t\tlabel: '2\u6708',\n\t\tvalue: '2'\n\t}]\n]"},["code","[\n\t[{\n\t\tlabel: '2011\u5e74',\n\t\tvalue: '2011'\n\t}, {\n\t\tlabel: '2012\u5e74',\n\t\tvalue: '2012'\n\t}],\n\n\t[{\n\t\tlabel: '1\u6708',\n\t\tvalue: '1'\n\t}, {\n\t\tlabel: '2\u6708',\n\t\tvalue: '2'\n\t}]\n]"]],["h4","\u7ea7\u8054\u65f6\uff0cchildren\u8868\u793a\u4e0b\u4e00\u5217\u6570\u636e"],["p","\u6bcf\u9879\u6570\u636e\u9664\u4e86 label \u548c value \u4e24\u4e2a\u5c5e\u6027\u5916\uff0c\u8fd8\u6709\u7b2c\u4e09\u4e2a\u5c5e\u6027\uff1achildren\uff0c\u8868\u793a\u7ea7\u8054\u65f6\u8be5\u9879\u503c\u4e0b\u4e00\u7ea7\u7684\u6570\u636e"],["pre",{lang:"html",highlighted:"[{\n\tlabel: '\u5ddd\u83dc',\n\tvalue: 'chuancai',\n\tchildren: [{\n\t\tlabel: '\u5ddd\u83dc-\u706b\u9505',\n\t\tvalue: 'huoguo',\n\t\tchildren: [{\n\t\t\tlabel: '\u5ddd\u83dc-\u706b\u9505-\u6bdb\u809a',\n\t\t\tvalue: 'maodu'\n\t\t}, {\n\t\t\tlabel: '\u5ddd\u83dc-\u706b\u9505-\u9e2d\u80a0',\n\t\t\tvalue: 'jiachang'\n\t\t}]\n\t}, {\n\t\tlabel: '\u5ddd\u83dc-\u5bb6\u5e38',\n\t\tvalue: 'jiachang',\n\t\tchildren: [{\n\t\t\tlabel: '\u5ddd\u83dc-\u5bb6\u5e38-\u5bab\u4fdd\u9e21\u4e01',\n\t\t\tvalue: 'jiding'\n\t\t}, {\n\t\t\tlabel: '\u5ddd\u83dc-\u5bb6\u5e38-\u6c34\u716e\u9c7c',\n\t\t\tvalue: 'yu'\n\t\t}]\n\t}]\n}, {\n\tlabel: '\u53f0\u6e7e',\n\tvalue: 'taiwan',\n\tchildren: [{\n\t\tlabel: '\u53f0\u6e7e-\u5c0f\u5403',\n\t\tvalue: 'xiaochi',\n\t\tchildren: [{\n\t\t\tlabel: '\u53f0\u6e7e-\u5c0f\u5403-\u5364\u8089\u996d',\n\t\t\tvalue: 'lurou'\n\t\t}, {\n\t\t\tlabel: '\u53f0\u6e7e-\u5c0f\u5403-\u80a5\u8089\u996d',\n\t\t\tvalue: 'feirou'\n\t\t}]\n\t}, {\n\t\tlabel: '\u53f0\u6e7e-\u70e7\u70e4',\n\t\tvalue: 'shao',\n\t\tchildren: []\n\t}]\n}]"},["code","[{\n\tlabel: '\u5ddd\u83dc',\n\tvalue: 'chuancai',\n\tchildren: [{\n\t\tlabel: '\u5ddd\u83dc-\u706b\u9505',\n\t\tvalue: 'huoguo',\n\t\tchildren: [{\n\t\t\tlabel: '\u5ddd\u83dc-\u706b\u9505-\u6bdb\u809a',\n\t\t\tvalue: 'maodu'\n\t\t}, {\n\t\t\tlabel: '\u5ddd\u83dc-\u706b\u9505-\u9e2d\u80a0',\n\t\t\tvalue: 'jiachang'\n\t\t}]\n\t}, {\n\t\tlabel: '\u5ddd\u83dc-\u5bb6\u5e38',\n\t\tvalue: 'jiachang',\n\t\tchildren: [{\n\t\t\tlabel: '\u5ddd\u83dc-\u5bb6\u5e38-\u5bab\u4fdd\u9e21\u4e01',\n\t\t\tvalue: 'jiding'\n\t\t}, {\n\t\t\tlabel: '\u5ddd\u83dc-\u5bb6\u5e38-\u6c34\u716e\u9c7c',\n\t\t\tvalue: 'yu'\n\t\t}]\n\t}]\n}, {\n\tlabel: '\u53f0\u6e7e',\n\tvalue: 'taiwan',\n\tchildren: [{\n\t\tlabel: '\u53f0\u6e7e-\u5c0f\u5403',\n\t\tvalue: 'xiaochi',\n\t\tchildren: [{\n\t\t\tlabel: '\u53f0\u6e7e-\u5c0f\u5403-\u5364\u8089\u996d',\n\t\t\tvalue: 'lurou'\n\t\t}, {\n\t\t\tlabel: '\u53f0\u6e7e-\u5c0f\u5403-\u80a5\u8089\u996d',\n\t\t\tvalue: 'feirou'\n\t\t}]\n\t}, {\n\t\tlabel: '\u53f0\u6e7e-\u70e7\u70e4',\n\t\tvalue: 'shao',\n\t\tchildren: []\n\t}]\n}]"]]],meta:{title:"Picker",subTitle:"\u9009\u62e9\u5668",filename:"components/ui/Picker/README.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h1",href:"#\u9009\u62e9\u5668-Picker",title:"\u9009\u62e9\u5668 Picker"},"\u9009\u62e9\u5668 Picker"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u7ec4\u4ef6\u63cf\u8ff0",title:"\u7ec4\u4ef6\u63cf\u8ff0"},"\u7ec4\u4ef6\u63cf\u8ff0"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u793a\u4f8b\u4ee3\u7801",title:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u8bf4\u660e",title:"\u8bf4\u660e"},"\u8bf4\u660e"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h3",href:"#props\u5217\u8868",title:"props\u5217\u8868"},"props\u5217\u8868"]],["li",["a",{className:"bisheng-toc-h3",href:"#\u6837\u5f0f\u5bf9\u8c61styles",title:"\u6837\u5f0f\u5bf9\u8c61styles"},"\u6837\u5f0f\u5bf9\u8c61styles"]],["li",["a",{className:"bisheng-toc-h3",href:"#props-data-\u8bf4\u660e",title:"props data \u8bf4\u660e"},"props data \u8bf4\u660e"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u975e\u7ea7\u8054\u65f6\uff0c\u6bcf\u4e2a\u6570\u7ec4\u8868\u793a\u4e00\u5217\u6570\u636e",title:"\u975e\u7ea7\u8054\u65f6\uff0c\u6bcf\u4e2a\u6570\u7ec4\u8868\u793a\u4e00\u5217\u6570\u636e"},"\u975e\u7ea7\u8054\u65f6\uff0c\u6bcf\u4e2a\u6570\u7ec4\u8868\u793a\u4e00\u5217\u6570\u636e"]],["li",["a",{className:"bisheng-toc-h4",href:"#\u7ea7\u8054\u65f6\uff0cchildren\u8868\u793a\u4e0b\u4e00\u5217\u6570\u636e",title:"\u7ea7\u8054\u65f6\uff0cchildren\u8868\u793a\u4e0b\u4e00\u5217\u6570\u636e"},"\u7ea7\u8054\u65f6\uff0cchildren\u8868\u793a\u4e0b\u4e00\u5217\u6570\u636e"]]]}}});