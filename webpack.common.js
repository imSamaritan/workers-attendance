const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: path.resolve(__dirname, 'src/App.js')
	},
	output: {
		filename: '[name][contenthash].bundle.js',
		path: path.resolve(__dirname, 'public'),
		clean: true,
		assetModuleFilename: '[name][ext]'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/i,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				},
				exclude: [path.resolve(__dirname, 'node_modules')]
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		title: 'getWebCreations',
		template: path.resolve(__dirname, 'src/index.html'),
	})]

}