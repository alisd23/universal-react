import route from 'shared/utils/simple-route';

export default [
  route('/', () => import('shared/pages/Home')),
  route('/account', () => import('shared/pages/Account'), [
    route('profile', () => import('shared/pages/Profile'))
  ])
];
