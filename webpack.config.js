const path = require('path');

var main = {
  mode: 'development',
  target: 'electron-main',
  entry: path.join(__dirname, 'src', 'main', 'main'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        include: [path.resolve(__dirname, 'src', 'main')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.main.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};

var preload = {
  mode: 'development',
  target: 'electron-preload',
  entry: path.join(__dirname, 'src', 'main', 'preload'),
  output: {
    filename: 'preload.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /.ts?$/,
        include: [path.resolve(__dirname, 'src', 'main')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.preload.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
};

module.exports = [main, preload];
