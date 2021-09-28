const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		assetModuleFilename: "static/[hash][ext][query]",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "static/[hash][ext][query]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			appMountId: "app",
			filename: "index.html",

			template: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "main.css",
		}),
	],
};

module.exports = config;
