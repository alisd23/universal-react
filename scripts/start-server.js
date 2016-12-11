import { server } from 'universal-webpack';
import settings from '../config/webpack/universal-webpack-settings';
import createDevConfig from '../config/webpack/_dev';

const config = createDevConfig({ server: true });

server(config, settings);
