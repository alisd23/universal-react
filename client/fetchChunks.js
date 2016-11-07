import { matchPattern } from 'react-router';

const isRoot = p => p === '/';

const defaultRoutesInfo = {
  promises: [],
  isMatch: false
};

// Always preload corresponding miss component for a 'matched' Match context
const handleMissFetch = (route) => {
  return route.component().then(comp => route.fetchedComponent = comp);
};
const handleMatchFetch = (route, parentPath) => {
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
};

const fetchChunks = (routes, parentPath = '/') =>
  Promise.all(routes
    .map(route => {
      if (route.isMiss) {
        return handleMissFetch(route);
      } else {
        return handleMatchFetch(route, parentPath);
      }
    }, defaultRoutesInfo)
    .filter(Boolean)
  );

export default fetchChunks;
