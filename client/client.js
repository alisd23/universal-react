import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory as history } from 'react-router';
import routes from 'shared/routes';

// Match current location against routes
// Find which component(s) to render
match(
  { history, routes },
  (error, redirectLocation, renderProps) => {
    // Start client rendering
    // React checksum should match - avoiding the need for any DOM updates
    ReactDOM.render(
      <Router {...renderProps}>
        {routes}
      </Router>,
      document.getElementById('root')
    );
  }
);
