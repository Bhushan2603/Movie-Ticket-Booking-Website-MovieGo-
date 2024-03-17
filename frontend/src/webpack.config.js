const path = require('path');

module.exports = {
  entry: './src/index.js', // Update with your entry point
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpilation
        },
      },
    ],
  },
};
