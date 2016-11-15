import React from 'react';
import ReactDOM from 'react-dom';
import { rehydrate } from 'glamor';
import { Router, match, browserHistory as history } from 'react-router';
import { AppContainer } from 'react-hot-loader';

rehydrate(window._glam);

// Import routes AFTER rehydrate to avoid duplicating styles tag
const routes = require('shared/routes').default;

const render = (renderProps) => {
  const routes = require('shared/routes').default;
  ReactDOM.render(
    <AppContainer history={history}>
      <Router {...renderProps}>
        {routes}
      </Router>
    </AppContainer>,
    document.getElementById('root')
  );
};

match(
  { history, routes },
  (error, redirectLocation, renderProps) => {
    if (error) {
      console.log('ERROR: ', error);
    }

    render(renderProps);

    /*
    HOT RELOADING SETUP - DEV ONLY
    */
    if (process.env.NODE_ENV === 'development') {
      if (module.hot) {
        module.hot.accept('shared/routes', () => {
          render(renderProps);
        });
      }
    }
  }
);
