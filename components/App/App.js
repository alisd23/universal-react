import React, { Component, PropTypes } from 'react';
import { Match } from 'react-router';
import routes from 'routes/routes';

const MatchWithSubRoutes = (route) => (
  <Match
    {...route}
    render={props =>
      <route.component
        {...props}
        routes={route.routes}
      />
    }
  />
);

export default class App extends Component {
  render() {
    return (
      <div>
        {
          routes.map((route, i) => (
            <MatchWithSubRoutes
              key={i}
              {...route}
            />
          ))
        }
      </div>
    );
  }
}
