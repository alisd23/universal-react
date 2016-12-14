import webpack from 'webpack';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import paths from '../paths';
import { WEBPACK_PORT } from '../ports';
import createSharedConfig from './_shared';

export default ({ server }) => {
  const shared = createSharedConfig({
    env: 'development',
    server
  });

  return {
    ...shared,
    devtool: 'inline-source-map',
    stats: {
      chunks: true
    },
    entry: [
      `webpack-dev-server/client?http://localhost:${WEBPACK_PORT}`,
      'webpack/hot/only-dev-server',
      ...shared.entry
    ],
    output: {
      path: paths.build,
      pathinfo: true,
      filename: 'bundle.js',
      chunkFilename: '[name].js',
      publicPath: '/'
    },
    plugins: [
      ...shared.plugins,
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin()
    ]
  };
};
