const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {from: './src/lib/config.js', to: './dist/config.js'},
      {from: './src/lib/wow/wow.min.js', to: './dist/wow/wow.min.js'}
    ])
  ],
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {test: /\.vue$/, use: 'vue-loader'}
    ]
  }
}