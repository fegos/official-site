const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ROOT_PATH = path.resolve(__dirname, '..')
const SRC_PATH = path.resolve(ROOT_PATH, 'client/desktop')
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')
const BabelTransformImport = path.resolve(SRC_PATH, 'node_modules/fego/lib/plugin/babel-transform-imports')
let desktopConfig, serverConfig, cdnPath = '/cdn/'

desktopConfig = {
	context: SRC_PATH,
	resolve: {
		modules: [path.resolve(SRC_PATH, 'node_modules'), 'common', 'node_modules'],
		extensions: ['.js'],
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
		path: path.resolve(BUILD_PATH),
		publicPath: cdnPath,
		filename: '[name].[chunkhash:8].js',
		chunkFilename: 'chunk.[name].[chunkhash:8].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
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
		}, {
			test: /\.md$/,
			loader: 'raw-loader'
		}]
	},
	plugins: [
		// 定义的全局变量
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.BUILD_ENV': JSON.stringify(process.env.BUILD_ENV)
		}),
		// 固定 module ID
		new webpack.HashedModuleIdsPlugin({ hashDigestLength: 8 }),
		// chunk ID 使用名称
		new webpack.NamedChunksPlugin(),
		// 通用模块
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity
		}),
		// webpack bootstrap runtime
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			minChunks: Infinity
		}),
		new webpack.LoaderOptionsPlugin({ minimize: true }),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJsPlugin({
			cache: true,
			parallel: true,
			uglifyOptions: {
				output: {
					beautify: false,
					comments: false
				},
				compress: {
					drop_console: true,
					warnings: false
				}
			}
		}),
		// 提取入口模块的样式为单独的文件
		new ExtractTextPlugin({ filename: '[name].[chunkhash:8].css' }),
		// new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			filename: path.resolve(ROOT_PATH, 'server/views/desktop.html'),
			template: path.resolve(ROOT_PATH, 'views/desktop.tpl.html'),
			favicon: path.resolve(SRC_PATH, 'favicon.ico')
		})
	],
	devtool: process.env.SERVER_ENV === 'local' ? 'cheap-eval-source-map' : ''
}

serverConfig = {
	context: SRC_PATH,
	resolve: {
		modules: [path.resolve(SRC_PATH, 'node_modules'), 'common', 'node_modules'],
		extensions: ['.js'],
		alias: {
			root: ROOT_PATH,
			src: SRC_PATH
		}
	},
	entry: {
		render: 'root/client/common/Render'
	},
	output: {
		path: path.resolve(ROOT_PATH, 'server/client/desktop'),
		publicPath: cdnPath,
		filename: '[name].js',
		chunkFilename: 'chunk.[name].js',
		libraryTarget: 'commonjs'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					babelrc: false,
					cacheDirectory: true,
					presets: [
						['env', {
							targets: { 'node': 'current' },
							modules: false
						}],
						'react',
						'stage-0'
					]
				}
			},
			exclude: [
				path.resolve(SRC_PATH, 'node_modules')
			]
		}, {
			test: /\.less$/,
			loader: 'null-loader',
			exclude: [
				path.resolve(SRC_PATH, 'sys')
			]
		}, {
			test: /\.less$/,
			use: ['server-style-loader', {
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
			test: /\.md$/,
			loader: 'raw-loader'
		}]
	},
	target: 'node',
	node: {
		__dirname: false
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
		}),
		new webpack.optimize.CommonsChunkPlugin({
			children: true,
			minChunks: 3
		})
	]
}

module.exports = [desktopConfig, serverConfig]
