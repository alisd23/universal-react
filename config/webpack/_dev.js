import webpack from 'webpack';
import { client_configuration, server_configuration } from 'universal-webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import paths from '../paths';
import { WEBPACK_PORT } from '../ports';
import createSharedConfig from './_shared';
import settings from './universal-webpack-settings';

export default ({ server }) => {
  const shared = createSharedConfig({
    env: 'development',
    server
  });

  return {
    ...shared,
    devtool: 'eval-source-map',
    stats: {
      chunks: false
    },
    entry: [
      `webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`,
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      ...shared.entry
    ],
    output: {
      path: paths.build,
      pathinfo: true,
      filename: 'js/bundle.js',
      publicPath: '/'
    },
    plugins: [
      ...shared.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin()
    ]
  };
};
