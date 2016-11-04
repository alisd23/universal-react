import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';

const TYPE_IMPORT = 'Import';

const asyncImport = template(`
  (new Promise((resolve) => {
    require.ensure([SOURCE], (require) => {
      resolve(require(SOURCE).default);
    });
  }))
`);
const syncImport = template(`
  require(SOURCE).default
`);

export default () => ({
  inherits: syntax,
  visitor: {
    CallExpression(path, state) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const { server, env } = state.opts;
        const isDev = env === 'development';
        const args = { SOURCE: path.node.arguments };
        const newImport = server || isDev ? syncImport(args) : asyncImport(args);
        path.replaceWith(newImport);
      }
    }
  }
});
