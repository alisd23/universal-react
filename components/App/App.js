import React, { Component, PropTypes } from 'react';
import { Match } from 'react-router';
import routes from 'routes/routes';
import globalStyles from 'styles/global.style';
import 'glamor/reset';

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
      <div
        id='app'
        className={globalStyles}
      >
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
