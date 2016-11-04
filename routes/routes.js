import route from './simple-route';

export default [
  route('/', () => import('routes/Home')),
  route('/about', () => import('routes/About'))
];
