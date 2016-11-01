import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../config/webpack/dev.client';
import ports from '../config/ports';

const HOSTNAME = 'localhost';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  stats: 'minimal',
  proxy: {
    '/': `http://${HOSTNAME}:${ports.SERVER_PORT}`
  }
});

server.listen(ports.WEBPACK_PORT, HOSTNAME, function(err) {
  if (err) throw new Error(`webpack-dev-server - ${err}`);
  console.log('[webpack-dev-server]', `http://${HOSTNAME}:${ports.WEBPACK_PORT}/webpack-dev-server/index.html`);
});
