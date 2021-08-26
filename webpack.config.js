module.exports = {
  mode: 'production',
  entry:{
    FullFlowLoad: './src/simulations/FullFlowLoad.test.js',
    FullFlowStress: './src/simulations/FullFlowStress.test.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].test.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
    ]
  },
  stats: {
    colors: true,
    warnings: false
  },
  target: "web",
  externals: /k6(\/.*)?/,
  devtool: 'source-map',
}