import route from 'utils/simple-route';

export default [
  route('/', () => import('components/routes/Home')),
  route('/account', () => import('components/routes/Account'), [
    route('profile', () => import('components/routes/Profile'))
  ])
];
