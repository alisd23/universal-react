import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import * as helmets from 'shared/helmets';
import globalStyles from 'shared/styles/global.style';
import { link } from 'shared/styles/component.style';
import * as appStyles from './App.style';
import 'glamor/reset';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div
        id='app'
        {...globalStyles}
        {...appStyles.root}
      >
        <Helmet {...helmets.app} />
        <h1>THE APP</h1>
        <div {...appStyles.content}>
          {this.props.children}
        </div>
        <Link
          to={'/trump'}
          {...link}
        >
          See 404 route
        </Link>
      </div>
    );
  }
}
