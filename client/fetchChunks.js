import { matchPattern } from 'react-router';

const isRoot = p => p === '/';

const fetchChunks = (routes, parentPath = '/') =>
  Promise.all(routes
    .map(route => {
      const match = matchPattern(
        route.pattern,
        window.location,
        isRoot(route.pattern),
        { pathname: parentPath }
      );

      if (match) {
        const component = route.component().then(comp => route.fetchedComponent = comp);
        const childRoutes = fetchChunks(route.routes || [], route.pattern);
        return Promise.all([childRoutes, component]);
      }
    })
    .filter(Boolean)
  );

export default fetchChunks;
