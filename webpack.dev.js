const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.(scss)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: [path.resolve(__dirname, 'node_modules')]
			}
		]
	},
	plugins: [new MiniCssExtractPlugin()],
	watch: true,
})