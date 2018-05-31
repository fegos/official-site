'use strict'

const Controller = require('egg').Controller

class ComController extends Controller {
  async checkAppStatus() {
    this.ctx.status = 200
  }

  async testStatus() {
    this.ctx.throw(403, 'Fobbbbbden')
  }
}

module.exports = ComController
