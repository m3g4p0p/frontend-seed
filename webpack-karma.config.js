module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(c|sc|sa)ss$/,
      loader: 'null-loader'
    }]
  },
  mode: 'development'
}
