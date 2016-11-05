import React from 'react';
import { Link } from 'react-router';
import propTypes from 'shared/utils/propTypes';
import SubRoutes from 'shared/components/SubRoutes';

const Account = ({ routes }) => (
  <div>
    <h1>My RevYou</h1>
    <Link to={'/'}>Go home</Link>
    <Link to={'/account/profile'}>Go profile</Link>
    <SubRoutes routes={routes} />
  </div>
);

Account.propTypes = {
  routes: propTypes.routes
};

export default Account;
