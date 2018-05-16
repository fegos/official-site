export default [{
  path: '/',
  exact: true,
  component: () => import('./home'),
}, {
  path: '/library',
  component: () => import('./library'),
}, {
  path: '/labs',
  component: () => import('./labs'),
}, {
  path: '/wiki',
  component: () => import('./wiki'),
  routes: require('./wiki/route').default,
}, {
  path: '/page',
  routes: require('./page/route').default,
}];
