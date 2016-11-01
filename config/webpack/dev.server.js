import { serverConfiguration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import createDevConfig from './_dev';

const config = createDevConfig({ server: true });

export default serverConfiguration(config, settings);
