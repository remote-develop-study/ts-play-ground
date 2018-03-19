const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    port: 8888,
    contentBase: path.join(__dirname, 'dist'),
  },
  // externals: [
  //   nodeExternals(),
  //   nodeExternals({
  //     modulesDir: path.resolve(__dirname, '../../node_modules')
  //   }),
  // ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
        },
      },
      {
        test: /\.s(c|a)?ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/views/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
  ],
};
