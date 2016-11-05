import path from 'path';

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

export default {
  build: resolveApp('build'),
  favicon: resolveApp('favicon.ico'),
  packageJson: resolveApp('package.json'),
  client: resolveApp('client'),
  components: resolveApp('components'),
  server: resolveApp('server'),
  config: resolveApp('config'),
  scripts: resolveApp('scripts'),
  utils: resolveApp('utils'),
  assets: resolveApp('assets'),
  styles: resolveApp('styles'),
  ownNodeModules: resolveApp('node_modules'),
  root: resolveApp('./')
};
