import React from 'react';
import Helmet from 'react-helmet';
import * as helmets from 'shared/helmets';
import { Link } from 'react-router';

export default () => (
  <div>
    <h1>Profile</h1>
    <Helmet {...helmets.profile} />
    <Link to={'/'}>Go home</Link>
    <Link to={'/account'}>Go account</Link>
  </div>
);
