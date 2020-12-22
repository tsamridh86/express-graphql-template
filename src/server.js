const { GraphQLServer, PubSub } = require('graphql-yoga');
const bodyParser = require('body-parser');
const { schema } = require('./schema/schema');
const { rootResolver } = require('./resolvers/rootResolver');
const { getUserToken, isUserAuthorized } = require('./auth/auth');
const neo4j = require('neo4j-driver');
const { makeAugmentedSchema } = require('neo4j-graphql-js');

const newSchema = makeAugmentedSchema({ typeDefs:schema });
const driver = neo4j.driver(
  'bolt://100.26.252.113:34566',
  neo4j.auth.basic('neo4j', 'compass-abettors-trials')
);
const pubsub = new PubSub();

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};

const server = new GraphQLServer({
  schema: newSchema,
  resolvers: rootResolver,
  context: (request) => ({
    ...request,
    pubsub,
    driver
  }),
  // middlewares: [isUserAuthorized],
});
server.express.use(bodyParser.json());
server.express.post('/login', getUserToken);
server.start(options, () => console.log('server running at port 4000'));
