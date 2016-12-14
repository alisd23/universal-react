import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import fs from 'fs';
import paths from '../paths';

export default ({ server, env }) => ({
  context: paths.root,
  entry: [
    path.join(paths.config, 'polyfills.js'),
    path.join(paths.client, 'client.js')
  ],
  resolve: {
    extensions: ['.js', '.json'],
    modules: [paths.ownNodeModules],
    alias: {
      client: paths.client,
      server: paths.server,
      shared: paths.shared,
      assets: paths.assets,
      config: paths.config
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'assets',
        to: 'assets'
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${env}"`,
      '_MOBILE_': process.env.MOBILE,
      '_SPLIT_': process.env.SPLIT,
      '_SERVER_': !!server,
      '_CLIENT_': !server
    })
  ]
});
