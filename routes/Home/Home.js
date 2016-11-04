import React from 'react';
import { Link } from 'react-router';
import { home } from './Home.style';

export default () => (
  <div className={home}>
    <h1>Cool App!</h1>
    <Link to={'/about'}>What's this about?</Link>
  </div>
);
