import React, { Component } from 'react';
import routes from 'components/routes';
import SubRoutes from 'components/SubRoutes';
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
        <SubRoutes routes={routes} />
      </div>
    );
  }
}
