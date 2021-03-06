module.exports = {
	presets: [
		'@babel/preset-env'
	],
	env: {
		test: {
			presets: [
				[ '@babel/preset-env', { targets: { node: 'current' }} ],
				'@babel/preset-react',
				'@babel/preset-flow',
			],
			plugins: [
				'@babel/plugin-proposal-class-properties'
			]
		},
	}
}
