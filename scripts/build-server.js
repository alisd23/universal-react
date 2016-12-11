import devConfig from '../config/webpack/dev.server';
import options from './options';
import { watcher } from './utils/webpack';

const params = {
  name: 'Server',
  options
};

watcher(devConfig, params);
