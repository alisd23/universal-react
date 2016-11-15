import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import * as helmets from 'shared/helmets';

const Account = ({ children }) => (
  <div>
    <h1>My RevYou</h1>
    <Helmet {...helmets.account} />
    <Link to={'/'}>Go home</Link>
    <Link to={'/account/profile'}>Go profile</Link>
    { children }
  </div>
);

Account.propTypes = {
  children: PropTypes.node
};

export default Account;
