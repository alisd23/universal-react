export default (pattern, component, routes = []) => ({
  exactly: routes.length === 0,
  pattern,
  component,
  routes
});
