import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import * as helmets from 'shared/helmets';
import globalStyles from 'shared/styles/global.style';
import 'glamor/reset';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div
        id='app'
        className={globalStyles}
      >
        <Helmet {...helmets.app} />
        <h1>THE APP</h1>
        {this.props.children}
        <Link to={'/trump'}>See 404 route</Link>
      </div>
    );
  }
}
