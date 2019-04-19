const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    "./js/index.js",
  ],
  output: {
    publicPath: "/static/",
    filename: "[name]-[hash].js",
    chunkFilename: '[name]-[hash].js',
    path: path.resolve('../static/'),
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.runtime.js',
      '@': path.resolve('js'),
    }
  },
}