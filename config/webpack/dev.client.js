import { clientConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import createDevConfig from './_dev';

const config = createDevConfig({ server: false });

export default clientConfiguration(config, settings);
