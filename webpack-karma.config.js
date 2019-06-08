module.exports = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /(?<!\.jsx?)$/,
      loader: 'null-loader'
    }]
  },
  mode: 'development'
}
