const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: './app/App.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg)$/i, // set for SVGs specifically
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000, // handles 1 megabyte base64 encoding
              fallback: 'file-loader' // fall back file loader
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWebPackPlugin({
      hash: true,
      template: './app/index.html',
      filename: 'index.html'
    })
  ]
};

module.exports = config;
