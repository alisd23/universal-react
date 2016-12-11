import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory as history } from 'react-router';
import routes from 'shared/routes';

match(
  { history, routes },
  (error, redirectLocation, renderProps) => {
    ReactDOM.render(
      <Router {...renderProps}>
        {routes}
      </Router>,
      document.getElementById('root')
    );
  }
);
