import route from 'shared/utils/simple-route';
import miss from 'shared/utils/miss';

export default [
  route('/', () => import('shared/pages/Home')),
  route('/account', () => import('shared/pages/Account'), [
    route('profile', () => import('shared/pages/Profile'))
  ]),
  miss(() => import('shared/pages/NotFound'))
];
