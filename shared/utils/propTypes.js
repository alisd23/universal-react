import { PropTypes } from 'react';

function lazyFunction(f) {
  return function() {
    return f().apply(this, arguments);
  };
}

export const route = PropTypes.shape({
  exactly: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  fetchedComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  pattern: PropTypes.string,
  routes: lazyFunction(() => routes),
  isMiss: PropTypes.bool
});

export const routes = PropTypes.arrayOf(route);
