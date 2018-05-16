function getParam(search) {
  const query = {};
  search = search ? search.replace(/^\?/, '').split('&') : '';
  if (search.length > 0) {
    search.map(str => str.split('=')).forEach((item) => {
      const [key, value] = item;
      query[key] = value;
    });
  }
  return query;
}
export default {
  getParam,
};
