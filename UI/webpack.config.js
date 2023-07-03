const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	mode: "development", // or 'production'
	output: {
		path: path.join(__dirname, "/dist"),
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
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader",
				options: {
					name: "/public/icons/[name].[ext]",
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
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "/public/index.html"),
		}),
	],
};
