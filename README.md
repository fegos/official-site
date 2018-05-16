# FEGO前端主站
一个展示大前端组成果，摸索前后端同构，实践前端未来科技的站点工程
## 工程结构

### 结构要求
1. 完整的WEB结构
	+ 两个环境：clent，server
	+ 三个平台：node server，desktop，mobile

2. 依赖独立

    三个平台各自打包，维护自身依赖

3. 代码复用

    三个平台允许复用代码

4. 构建分离

    clent端需要webpack编译，server端跑源码即可

### 目录说明

```
├── /build			# 客户端构建输出的静态文件目录
├── /config			# 工程配置目录
├── /mock			# 假数据服务
├── /lib			# 公共库，需要编译后提供给服务端使用
│ ├── /addon    		# C++扩展源码
│ ├── /xxx    			# 其它JS模块
├── /views			# 模版文件，含客户端和服务端使用的html入口文件
├── /client         	# 客户端源码
│ ├── /desktop    		# 桌面版
│ │ ├── /common					# 公共模块
│ │	└── package.json 			# 依赖配置
│ ├── /mobile         	# 移动版
│ │ ├── /common					# 公共模块
│ │	└── package.json 			# 依赖配置
├── /server			# 服务端源码
│ ├── /config    		# 环境配置，例如：dev，test，online等
│ ├── /pm2         		# pm2相关
└── package.json        # 配置入口文件、依赖和 scripts
```
