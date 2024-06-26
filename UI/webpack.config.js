const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();
module.exports = {
	entry: "./src/index.js", // Entry point for your app
	output: {
		path: path.resolve(__dirname, "build"), // The bundle output path
		filename: "bundle.js", // The name of the bundle
		publicPath: "/", // Public path for assets (useful for routing)
	},
	resolve: {
		extensions: [".js", ".jsx"], // Allow importing .js and .jsx files without extensions
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
		}),
		new webpack.DefinePlugin({
			"process.env.REACT_APP_EMAILJS_SERVICE_ID": JSON.stringify(process.env.REACT_APP_EMAILJS_SERVICE_ID),
			"process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT_ID": JSON.stringify(
				process.env.REACT_APP_EMAILJS_TEMPLATE_CONTACT_ID
			),
			"process.env.REACT_APP_EMAILJS_USER_ID": JSON.stringify(process.env.REACT_APP_EMAILJS_USER_ID),
			"process.env.REACT_APP_TESTING_FOR_ENV_VAR": JSON.stringify(process.env.REACT_APP_TESTING_FOR_ENV_VAR),
		}),
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
