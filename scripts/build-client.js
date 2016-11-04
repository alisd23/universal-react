import prodConfig from '../config/webpack/prod.client';
import devConfig from '../config/webpack/dev.client';
import options from './options';
import { watcher, builder } from './utils/webpack';

const config = options.dev ? devConfig : prodConfig;

const params = {
  name: 'Client',
  options
};

if (options.dev) {
  watcher(config, params);
} else {
  builder(config, params);
}
