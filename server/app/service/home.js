const Service = require('egg').Service;

class HomeService extends Service {
  async query() {
    return 'ok';
  }
}
module.exports = HomeService;
