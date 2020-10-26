const combineSchema = (schemaArray) => schemaArray.reduce((prev, current) => `${prev}\n${current}`, '');

module.exports = {
  combineSchema,
};
