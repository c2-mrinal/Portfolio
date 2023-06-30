const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js",
	},
	devServer: {
		port: 3000,
		allowedHosts: "all",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/src/index.html"),
		}),
	],
};
