import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import * as helmets from 'shared/helmets';
import { link } from 'shared/styles/component.style';

export default () => (
  <div>
    <h1>Profile</h1>
    <Helmet {...helmets.profile} />
    <Link
      to={'/account'}
      {...link}
    >
      Go account
    </Link>
  </div>
);
