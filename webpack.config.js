const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  watch: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // [module] will allow us to set any external modules we have added to webpack
  module: {
    // [rules] will determine the rules around those external modules

    rules: [
      // First rule is to identify js and jsx files and turn on babel
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // Second rule is to check for css files and load them with the following loaders
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
