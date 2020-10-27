const { GraphQLServer, PubSub } = require('graphql-yoga');
const bodyParser = require('body-parser');
const { schema } = require('./schema/schema');
const { rootResolver } = require('./resolvers/rootResolver');
const { getUserToken, isUserAuthorized } = require('./auth/auth');

const pubsub = new PubSub();

const options = {
  port: 4000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
};


const server = new GraphQLServer({
  typeDefs: schema,
  resolvers: rootResolver,
  context: (request) => ({
    ...request,
    pubsub,
  }),
  middlewares: [isUserAuthorized]
});
server.express.use(bodyParser.json());
server.express.post('/login', getUserToken);
server.start(options, () => console.log('server running at port 4000'));
