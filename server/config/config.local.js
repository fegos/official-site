const path = require('path');

module.exports = (appInfo) => {
  const config = exports = {};
  config.static = {
    prefix: '/cdn/',
    dir: path.join(appInfo.baseDir, '../build'),
    dynamic: true,
    preload: false,
    maxAge: 0,
    buffer: false,
  };

  config.logger = {
    dir: path.join(appInfo.baseDir, '../logs'),
  };
  config.customLogger = {
    httpLogger: {
      file: path.join(appInfo.baseDir, '../logs/access.log'),
    },
  };
  config.fego = {
    redis: {
      host: '127.0.0.1',
      port: '6379',
      password: 'R72SGZ66',
    },
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'fe_server_db',
      user: 'fe_server_db',
      password: 'fe_@pass',
    },
    sftp: {
      host: '127.0.0.1',
      port: '22',
      username: 'sftp_user',
      password: 'sftppass',
      whiteList: ['127\\.0\\.0\\.\\d+', '10\\.235\\.139.\\d+', '10\\.160\\.6[1|2]\\.\\d+', '10\\.200\\.24[0|2]\\.\\d+'],
    },
  };
  return config;
};
