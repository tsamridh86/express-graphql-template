const { Queries } = require('./Queries/queries');
const { Mutations } = require('./Mutations/mutations');
const { Objects } = require('./Objects/objects');
const { Subscription } = require('./Subscriptions/subscription');
const { combineSchema } = require('./schemaCombiner');


const schema = combineSchema([Queries, Mutations, Objects, Subscription]);

module.exports = {
  schema,
};
