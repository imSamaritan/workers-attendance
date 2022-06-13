const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
	mode: 'production',
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(scss)$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				exclude: [path.resolve(__dirname, 'node_modules')]
			}
		]
	},

})