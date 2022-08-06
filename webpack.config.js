const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: HtmlWebPackPlugin.loader,
      },
      {
        test: /\.css$/,
        use: MiniCssExtractPlugin.loader,
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin(),
    new MiniCssExtractPlugin(),
  ],
};
