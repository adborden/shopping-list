const path = require('path');

module.exports = {
  entry: {
    app: './src/app.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'js'), 'node_modules'],
    extensions: ['.jsx', '.js', '.json'],
  },
};
