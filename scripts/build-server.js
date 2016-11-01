import webpack from 'webpack';
// import prodConfig from '../config/webpack/prod.server';
import devConfig from '../config/webpack/dev.server';
import options from './options';

const config = options.dev ? devConfig : prodConfig;

const compiler = webpack(config);

compiler.watch({}, function(err, stats) {
  if (err) {
    throw new Error(`Webpack compile error - ${err}`);
  }
  console.log(`\n[Server](${options.dev ? 'DEV' : 'PROD'}) ==> Built and Watching`);
});
