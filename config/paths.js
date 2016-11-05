import path from 'path';

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

export default {
  build: resolveApp('build'),
  favicon: resolveApp('favicon.ico'),
  packageJson: resolveApp('package.json'),
  client: resolveApp('client'),
  server: resolveApp('server'),
  shared: resolveApp('shared'),
  config: resolveApp('config'),
  scripts: resolveApp('scripts'),
  assets: resolveApp('assets'),
  ownNodeModules: resolveApp('node_modules'),
  root: resolveApp('./')
};
