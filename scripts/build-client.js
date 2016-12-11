import devConfig from '../config/webpack/dev.client';
import options from './options';
import { watcher } from './utils/webpack';

const params = {
  name: 'Client',
  options
};

watcher(devConfig, params);
