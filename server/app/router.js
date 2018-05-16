/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get(/checkappstatus(?:\.|$)/, controller.com.checkAppStatus);
  router.get('/api/home/query', controller.home.query);
  router.post('/api/open/pageMaker/upload', controller.open.pageMaker.upload);
  router.get('/api/testStatus', controller.com.testStatus);
};
