const path = require('path')
const webpack = require('webpack')

const appDirectory = path.resolve(__dirname, '../../')

const babelLoaderConfiguration = {
	test: /\.js$/,
	include: [
		path.resolve(appDirectory, 'index.web.js'),
		path.resolve(appDirectory, 'src'),
		path.resolve(appDirectory, 'node_modules/react-native-uncompiled')
	],
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			presets: [
				'@babel/preset-env',
				'@babel/preset-typescript',
				'@babel/preset-react',
				'react-native'
			],
			plugins: [
				'@babel/plugin-transform-runtime',
				'react-native-web'
			]
		}
	}
}

const imageLoaderConfiguration = {
	test: /\.(gif|jpe?g|png|svg)$/,
	use: {
		loader: 'url-loader',
		options: {
			name: '[name].[ext]'
		}
	}
}

module.exports = {
	entry: [
		path.resolve(appDirectory, 'index.web.js')
	],

	output: {
		filename: 'bundle.web.js',
		path: path.resolve(appDirectory, 'dist')
	},

	module: {
		rules: [
			babelLoaderConfiguration,
			imageLoaderConfiguration
		]
	},

	resolve: {
		alias: {
			'react-native$': 'react-native-web'
		},
		extensions: ['.web.js', '.js']
	}
}