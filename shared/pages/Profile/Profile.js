import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div>
    <h1>Profile</h1>
    <Link to={'/'}>Go home</Link>
    <Link to={'/account'}>Go account</Link>
  </div>
);
