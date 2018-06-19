const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: {
    'recharger-examples': './examples/main.js',
    'recharger-mobile': './examples/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../examples/dist'),
    publicPath: 'https://zivenday.me/recharger/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'async_[name].[chunkhash:8].js'
  },
  stats: {
    modules: false,
    children: false
  },
  serve: {
    open: true,
    host: '0.0.0.0',
    dev: {
      logLevel: 'warn'
    },
    hot: {
      logLevel: 'warn'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['recharger-examples'],
      template: 'index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['recharger-mobile'],
      template: 'examples.html',
      filename: 'mobile.html',
      inject: true
    })
  ]
};