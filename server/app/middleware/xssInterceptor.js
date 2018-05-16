const INVAILD_TOKEN = /[<>'"]/;
function isVaildQuery(query) {
  if (query === undefined || query === null) {
    return true;
  }
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      if (key && INVAILD_TOKEN.test(key)) {
        return false;
      }
      if (query[key] && INVAILD_TOKEN.test(query[key])) {
        return false;
      }
    }
  }
  return true;
}

module.exports = () => async function xssInterceptor(ctx, next) {
  const { query } = ctx;
  if (!isVaildQuery(query)) {
    ctx.status = 403;
    return;
  }
  await next();
};

