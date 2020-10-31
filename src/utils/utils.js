const checkConnectionParams = (args) => {
  const {
    first, last, before, after,
  } = args;
  if (first && last) {
    throw new Error('You cannot use "first" and "last" parameter at the same time');
  }
  if (before && after) {
    throw new Error('You cannot use "before" and "after" parameter at the same time');
  }
  if (first < 0 || last < 0 || before < 0 || after < 0) {
    throw new Error('The parameters have to be a non-negative integer');
  }
  const limit = first || last || 10;
  const cursor = before || after || 0;
  const direction = before ? -1 : 1;
  return [limit, cursor, direction];
};

module.exports = {
  checkConnectionParams,
};
