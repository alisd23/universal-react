import { server } from 'universal-webpack';
import settings from '../config/webpack/universal-webpack-settings';
import createDevConfig from '../config/webpack/_dev';
import createProdConfig from '../config/webpack/_prod';
import options from './options';

const createConfig = options.dev ? createDevConfig : createProdConfig;

const config = createConfig({ server: true });

server(config, settings);
