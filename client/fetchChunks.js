import { matchPattern } from 'react-router';

const fetchChunks = routes =>
  Promise.all(routes
    .map(route => {
      return matchPattern(route.pattern, window.location, false)
        ? route.component()
          .then(comp => route.fetchedComponent = comp)
        : null;
    })
    .filter(Boolean)
  );

export default fetchChunks;
