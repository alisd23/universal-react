import React from 'react';
import { Link } from 'react-router';
import * as homeStyles from './Home.style';
import { link } from 'shared/styles/component.style';

export default () => (
  <div {...homeStyles.root}>
    <h1>Cool App!</h1>
    <Link
      to={'/account'}
      {...link}
    >
      See my account
    </Link>
  </div>
);
