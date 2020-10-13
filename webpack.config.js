const path = require('path')

module.exports = {
	entry: './src/index.ts',
	mode: process.env.NODE_ENV,
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
	},
}
