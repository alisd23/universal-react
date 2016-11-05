import React, { Component } from 'react';
import routes from 'shared/routes';
import SubRoutes from 'shared/components/SubRoutes';
import globalStyles from 'shared/styles/global.style';
import 'glamor/reset';

export default class App extends Component {
  render() {
    return (
      <div
        id='app'
        className={globalStyles}
      >
        <h1>THE APP</h1>
        <SubRoutes routes={routes} />
      </div>
    );
  }
}
