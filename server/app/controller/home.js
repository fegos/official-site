'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async query() {
    const { ctx, service } = this
    ctx.body = await service.home.query()
  }
}

module.exports = HomeController
