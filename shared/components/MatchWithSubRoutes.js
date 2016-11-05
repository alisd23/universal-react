import React from 'react';
import { Match } from 'react-router';
import LazyLoad from 'shared/components/LazyLoad';

const call = cand => typeof cand === 'function' ? cand() : cand;

const MatchWithSubRoutes = (route) => (
  <Match
    {...route}
    render={props =>
      <LazyLoad
        {...props}
        {...route}
        component={call(route.component)}
      />
    }
  />
);

export default MatchWithSubRoutes;
