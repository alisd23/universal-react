import React, { Component } from 'react';
import routes from 'routes/routes';
import MatchWithSubRoutes from 'components/MatchWithSubRoutes';
import globalStyles from 'styles/global.style';
import 'glamor/reset';

export default class App extends Component {
  render() {
    return (
      <div
        id='app'
        className={globalStyles}
      >
        <h1>THE APP</h1>
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
