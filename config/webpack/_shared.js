import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import fs from 'fs';
import paths from '../paths';
const babelrc = JSON.parse(fs.readFileSync('.babelrc'));

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
      components: paths.components,
      client: paths.client,
      server: paths.server,
      routes: paths.routes,
      assets: paths.assets,
      styles: paths.styles,
      config: paths.config
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [paths.root],
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          babelrc: false,
          ...babelrc,
          plugins: [
            ...babelrc.plugins,
            [path.resolve(paths.scripts, 'utils/babel-isomorphic-import-plugin.js'), { server, env }]
          ]
        }
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
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
      '_SERVER_': !!server,
      '_CLIENT_': !server
    })
  ]
});
