const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'public/main.js'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: './public',
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  },
};