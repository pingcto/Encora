const path = require('path');

module.exports = {
	entry: './components/index.tsx',
	output: {
		libraryTarget: 'commonjs',
	},
	module: {
		rules:  [
			{
				test: /\.tsx$/,
				exclude: /(node_modules|dist)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	externals: {
		'react': 'commonjs react'
	}
}