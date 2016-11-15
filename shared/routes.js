import route from 'shared/utils/simple-route';
import indexRoute from 'shared/utils/index-route';
import miss from 'shared/utils/miss';
import App from 'shared/components/App';

export default {
  path: '/',
  component: App,
  indexRoute: indexRoute(import('shared/pages/Home')),
  childRoutes: [
    route('account', import('shared/pages/Account'), [
      route('profile', import('shared/pages/Profile'))
    ]),
    miss(import('shared/pages/NotFound'))
  ]
};
