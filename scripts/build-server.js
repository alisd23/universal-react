import prodConfig from '../config/webpack/prod.server';
import devConfig from '../config/webpack/dev.server';
import options from './options';
import { watcher, builder } from './utils/webpack';

const config = options.dev ? devConfig : prodConfig;

const params = {
  name: 'Server',
  options
};

if (options.dev) {
  watcher(config, params);
} else {
  builder(config, params);
}
