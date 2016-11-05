import React from 'react';
import MatchWithSubRoutes from 'shared/components/MatchWithSubRoutes';
import propTypes from 'shared/utils/propTypes';

const SubRoutes = ({ routes, ...props }) => (
  <div {...props}>
    {
      routes.map((route, i) => (
        <MatchWithSubRoutes
          key={i}
          {...route}
        />
      ))
    }
  </div>
);

SubRoutes.propTypes = {
  routes: propTypes.routes
};

export default SubRoutes;
