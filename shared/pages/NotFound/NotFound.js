import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import * as helmets from 'shared/helmets';
import { link } from 'shared/styles/component.style';

const NotFound = () => (
  <div>
    <h1>404 Not Found</h1>
    <Helmet {...helmets.notFound} />
    <Link
      to={'/'}
      {...link}
    >
      Go home
    </Link>
  </div>
);

export default NotFound;
