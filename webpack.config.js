// webpack.config.js

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    // Path to your output directory
    path: path.resolve(__dirname, 'dist'),
    // The name of the output bundle
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/styles/_variables.scss";',
            },
          },
        ],
      },
      {
        test: /^((?!\.module).)*scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "./src/styles/_variables.scss";',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./**/*.php', './dist/*.css', './dist/*.js'],
      proxy: 'http://adsontheme.local/',
    }),
  ],
}
