import path from 'path';

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

export default {
  build: resolveApp('build'),
  html: resolveApp('index.html'),
  favicon: resolveApp('favicon.ico'),
  packageJson: resolveApp('package.json'),
  client: resolveApp('client'),
  components: resolveApp('components'),
  routes: resolveApp('routes'),
  server: resolveApp('server'),
  config: resolveApp('config'),
  scripts: resolveApp('scripts'),
  assets: resolveApp('assets'),
  styles: resolveApp('styles'),
  ownNodeModules: resolveApp('node_modules'),
  root: resolveApp('./')
};
