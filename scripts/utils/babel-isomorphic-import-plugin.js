import template from 'babel-template';
import syntax from 'babel-plugin-syntax-dynamic-import';

const TYPE_IMPORT = 'Import';

const asyncImport = template(`
  (nextState, cb) => {
    require.ensure([SOURCE], (require) => {
      cb(null, require(SOURCE).default);
    });
  }
`);
const syncImport = template(`
  (nextState, cb) => cb(null, require(SOURCE).default)
`);

export default () => ({
  inherits: syntax,
  visitor: {
    CallExpression(path, state) {
      if (path.node.callee.type === TYPE_IMPORT) {
        const { server, env } = state.opts;
        const isDev = env === 'development';
        const args = { SOURCE: path.node.arguments };
        const newImport = server || (isDev && !process.env.SPLIT)
          ? syncImport(args)
          : asyncImport(args);
        path.replaceWith(newImport);
      }
    }
  }
});
