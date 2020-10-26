const { buildSchema } = require('graphql');
const { Queries } = require('./Queries/queries');
const { Mutations } = require('./Mutations/mutations');
const { Objects } = require('./Objects/objects');
const { combineSchema } = require('./schemaCombiner');


const schema = buildSchema(combineSchema([Queries, Mutations, Objects]));

module.exports = {
  schema,
};
