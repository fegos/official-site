const path = require('path');
const fs = require('fs');
const send = require('koa-send');

const SITE_PATH = path.resolve(__dirname, '../../sites');
const sites = fs.readdirSync(SITE_PATH).filter(name => /^[A-Za-z0-9\-_]+/.test(name));
module.exports = () => async function serve(ctx, next) {
  const name = (ctx.path.match(/^\/sites\/([A-Za-z0-9\-_]+)/) || [])[1];
  if (!name) {
    await next();
  } else if (sites.indexOf(name) > -1) {
    const opts = {
      index: 'index.html',
      root: path.resolve(SITE_PATH, name),
    };
    const pathname = ctx.path.replace(`/sites/${name}`, '');
    try {
      if (/\.(js|css|html)$/.test(pathname)) {
        await send(ctx, pathname, opts);
      } else {
        await send(ctx, '/', opts);
      }
    } catch (err) {
      if (err.status !== 404) {
        throw err;
      }
    }
  }
};
