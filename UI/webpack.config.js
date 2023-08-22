const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	mode: "production", // or 'production'
	output: {
		path: path.join(__dirname, "/build"),
		filename: "bundle.js",
	},
	devServer: {
		compress: true,
		disableHostCheck: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "fonts/",
				},
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: "file-loader",
				options: {
					name: "public/icons/[name].[ext]",
				},
			},
			{
				test: /\.(mov|mp4)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
						},
					},
				],
			},
			{
				test: /\.svg$/,
				oneOf: [
					{
						resourceQuery: /icon/,
						use: [
							{
								loader: "file-loader",
								options: {
									name: "public/icons/[name].[ext]",
								},
							},
						],
					},
					{
						use: [
							{
								loader: "url-loader",
								options: {
									limit: 8192,
									name: "[name].[ext]",
									outputPath: "images/",
								},
							},
						],
					},
				],
			},
		],
	},
	resolve: {
		modules: ["node_modules"],
		extensions: [".js", ".jsx", ".html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/public/index.html"),
		}),
	],
};
