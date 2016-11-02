import { serverConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import createProdConfig from './_prod';

const config = createProdConfig({ server: true });

export default serverConfiguration(config, settings);
