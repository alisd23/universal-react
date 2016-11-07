import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import routes from 'shared/routes';
import * as helmets from 'shared/helmets';
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
        <Helmet {...helmets.app} />
        <h1>THE APP</h1>
        <SubRoutes routes={routes} />
        <Link to={'/trump'}>See 404 route</Link>
      </div>
    );
  }
}
