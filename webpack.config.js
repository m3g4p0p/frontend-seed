const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}

module.exports = ({ production = false } = {}) => ({
  entry: {
    main: path.join(paths.src, 'index.js')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
      chunkFilename: '[id].[hash:8].css'
    }),
    new CleanWebpackPlugin(paths.dist),
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        production ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  mode: production ? 'production' : 'development',
  devtool: production ? false : 'inline-source-map',
  devServer: {
    contentBase: paths.dist
  },
  output: {
    filename: production ? '[name].[hash:8].bundle.js' : '[name].bundle.js',
    path: paths.dist,
    publicPath: '/'
  }
})
