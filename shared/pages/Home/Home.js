import React from 'react';
import { Link } from 'react-router';
import { home } from './Home.style';

export default () => (
  <div {...home}>
    <h1>Cool App!</h1>
    <Link to={'/account'}>See my account</Link>
  </div>
);
