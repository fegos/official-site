/**
 * Created by swx on 2017/12/29.
 */
module.exports = (appInfo) => {
  const config = exports = {};

  config.logger = {
    level: 'INFO',
  };
  config.nsip = {
    debug: false,
    redis: {
      host: '10.200.242.33',
      port: '6382',
      password: 'R72SGZ66',
    },
    mysql: {
      host: '10.200.242.9',
      port: '3461',
      database: 'fe_api_db',
      user: 'fe_api_db',
      password: 'fe_@pass',
    },
    sftp: {
      host: '10.200.240.32',
      port: '7522',
      username: 'fe_hhtcex',
      password: 'UywMvVf9z9JPN7',
      whiteList: ['127\\.0\\.0\\.\\d+', '10\\.160\\.6[1|2]\\.\\d+', '10\\.200\\.24[0|2]\\.\\d+', '114\\.113\\.198\\.\\d+'],
    },
  };
  return config;
};
