const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
		new Dotenv(), // Automatically injects .env variables
	],
	devServer: {
		port: 3333,
		historyApiFallback: true,
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
				test: /\.(woff2?|ttf|eot)(\?v=\w+)?$/,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext][query]",
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
};
