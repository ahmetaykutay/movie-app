const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const sassModuleRegex = /\.module\.(scss|sass|css)$/

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, 'public/main.js'),
		filename: 'main.js'
	},
	devServer: {
		contentBase: './public'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: sassModuleRegex,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV === 'development'
						}
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: sassModuleRegex,
				use: [
					'style-loader',
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]-[local]-[hash:base64]'
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	]
}
