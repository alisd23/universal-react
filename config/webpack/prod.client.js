import { clientConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import createProdConfig from './_prod';

const config = createProdConfig({ server: false });

export default clientConfiguration(config, settings);
