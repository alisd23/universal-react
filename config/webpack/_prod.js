import webpack from 'webpack';
import paths from '../paths';
import createSharedConfig from './_shared';
import settings from './universal-webpack-settings';

export default ({ server }) => {
  const shared = createSharedConfig({
    env: 'production',
    server
  });

  return {
    ...shared,
    bail: true,
    devtool: false,
    entry: shared.entry,
    output: {
      path: paths.build,
      filename: '[name].[chunkhash:8].js',
      chunkFilename: '[name].[chunkhash:8].chunk.js',
      publicPath: '/'
    },
    plugins: [
      ...shared.plugins,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      })
    ]
  };
};
