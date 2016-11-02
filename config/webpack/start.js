const path = require('path');
const nodeExternals = require('webpack-node-externals');

const root = (...args) => path.resolve(__dirname, '../..', ...args);

module.exports = {
  context: root(),
  target: 'node',
  entry: [root('scripts/start-server.js')],
  output: {
    path: root('scripts/dist'),
    filename: 'start-server.js'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
