const path = require('path');

module.exports = (appInfo) => {
  const config = exports = {};
  const PORT = 8000;
  const BE_PORT = 8007;
  config.cluster = {
    listen: {
      port: PORT,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name  }_1514345550446_8572`;
  config.security = { csrf: { enable: false } };
  // config.security = {
  // 	csrf: {
  // 		useSession: false,
  // 		ignoreJSON: false,
  // 		cookieName: 'csrfToken',
  // 		sessionName: 'csrfToken',
  // 		headerName: 'x-csrf-token',
  // 		bodyName: '_csrf',
  // 		queryName: '_csrf'
  // 	}
  // }
  config.logger = {
    level: 'DEBUG',
    dir: path.join(appInfo.baseDir, '../../logs'),
    appLogName: 'server.log',
    errorLogName: 'error.log',
  };
  config.customLogger = {
    httpLogger: {
      file: path.join(appInfo.baseDir, '../../logs/access.log'),
    },
  };

  config.middleware = [
    'addRequestId',
    'errorHandler',
    'bodyFormatter',
    'userAgent',
    'staticSites',
    'httpLogger',
    'xssInterceptor',
    'koaBody',
    'ssRender',
  ];
  config.koaBody = { multipart: true, formLimit: '3mb' };
  config.ssRender = {
    baseUrl: `http://localhost:${PORT}`,
    desktopRender: require('../client/desktop/render'),
    mobileRender: require('../client/mobile/render'),
  };
  config.view = {
    defaultViewEngine: 'ejs',
    root: path.join(appInfo.baseDir, 'views'),
  };

  // add your config here
  config.fego = {
    debug: true,
    cacheTime: 10,
    ipLimit: {
      key: 'ip',
      duration: 10,
      count: 1000,
      whiteList: [
        '127\\.0\\.0\\.\\d+',
        '10\\.160\\.6[1|2]\\.\\d+',
        '10\\.200\\.24[0|2]\\.\\d+',
      ],
      blackList: [],
    },
    server: `http://localhost:${BE_PORT}`,
  };
  return config;
};
