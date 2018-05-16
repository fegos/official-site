const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ROOT_PATH = path.resolve(__dirname, '..')
const SRC_PATH = path.resolve(ROOT_PATH, 'client/mobile')
const BabelTransformImport = `${SRC_PATH}/node_modules/fego/lib/plugin/babel-transform-imports`
let cdnPath = '/'

module.exports = {
	context: SRC_PATH,
	resolve: {
		modules: [path.resolve(SRC_PATH, 'node_modules'), 'common', 'node_modules'],
		// 默认使用mob相关的库文件
		extensions: ['.mob.js', '.js'],
		alias: {
			root: ROOT_PATH,
			src: SRC_PATH
		}
	},
	entry: {
		vendor: ['root/client/common/Base', 'react', 'react-dom',
			'react-router', 'react-router-dom', 'react-router-config'],
		index: ['src/index']
	},
	output: {
		publicPath: cdnPath,
		filename: '[name].[hash:8].js',
		chunkFilename: 'chunk.[name].[chunkhash:8].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: [
						[
							require(BabelTransformImport),
							require(`${BabelTransformImport}/option`).create()
						]
					]
				}
			},
			exclude: [
				path.resolve(SRC_PATH, 'node_modules')
			]
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'postcss-loader']
			}),
			exclude: [
				path.resolve(SRC_PATH, 'sys')
			]
		}, {
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'postcss-loader', 'less-loader']
			}),
			exclude: [
				path.resolve(SRC_PATH, 'sys')
			]
		}, {
			test: /\.less$/,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {
					modules: true,
					localIdentName: '[local]_[hash:base64:8]'
				}
			}, 'postcss-loader', 'less-loader'],
			include: [
				path.resolve(SRC_PATH, 'sys')
			]
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader',
			options: {
				limit: 8192,
				name: 'img/[name].[hash:base64:8].[ext]'
			}
		}, {
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			loader: 'file-loader',
			options: {
				name: 'img/[name].[hash:base64:8].[ext]'
			}
		}, {
			test: /\.html$/,
			loader: 'html-loader',
			options: {
				minimize: true,
				removeComments: true,
				collapseWhitespace: true
			}
		}]
	},
	plugins: [
		// 定义的全局变量
		new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		// 提取入口模块的样式为单独的文件
		new ExtractTextPlugin({ filename: '[name].[contenthash:8].css' }),
		new HtmlWebpackPlugin({
			template: path.resolve(ROOT_PATH, 'views/mobile.html')
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'cheap-eval-source-map',
	devServer: {
		port: 8090,
		historyApiFallback: true,
		proxy: {
			'/api/*': {
				target: `http://127.0.0.1:8007/beapi`,
				secure: false
			}
		}
	}
}
