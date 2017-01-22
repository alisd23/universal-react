import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import * as helmets from 'shared/helmets';
import { link } from 'shared/styles/component.style';
import * as accountStyles from './Account.style';

const Account = ({ children }) => (
  <div {...accountStyles.root}>
    <h1>My Account</h1>
    <Helmet {...helmets.account} />
    <Link
      to={'/'}
      {...link}
    >
      Go home
    </Link>
    <Link
      to={'/account/profile'}
      {...link}
    >
      Go profile
    </Link>
    { children }
  </div>
);

Account.propTypes = {
  children: PropTypes.node
};

export default Account;
