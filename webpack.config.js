const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const { resolve, join } = require('path')

const path = {
  src: resolve(__dirname, 'src'),
  dist: resolve(__dirname, 'dist')
}

module.exports = ({ production = false } = {}) => ({
  entry: {
    main: join(path.src, 'index.js')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join(path.src, 'index.html'),
      minify: {
        removeComments: production,
        collapseWhitespace: production
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(c|sc|sa)ss$/,
      use: [
        production ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg|ttf|eot|woff2?)$/,
      loader: 'url-loader',
      options: {
        fallback: 'file-loader'
      }
    }]
  },
  mode: production ? 'production' : 'development',
  devtool: production ? false : 'inline-source-map',
  devServer: {
    contentBase: path.dist
  },
  output: {
    filename: production ? '[name].[hash:8].bundle.js' : '[name].bundle.js',
    path: path.dist,
    publicPath: '/'
  }
})
