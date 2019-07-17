var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html", 
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
        ],
      },
    ],
  },
};
