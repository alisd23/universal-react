import React from 'react';
import { Match } from 'react-router';
import LazyLoad from 'components/LazyLoad';

const call = cand => typeof cand === 'function' ? cand() : cand;

const MatchWithSubRoutes = (route) => (
  <Match
    {...route}
    render={props =>
      <LazyLoad
        {...props}
        component={call(route.component)}
        fetchedComponent={route.fetchedComponent}
      />
    }
  />
);

export default MatchWithSubRoutes;
