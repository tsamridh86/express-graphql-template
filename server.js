const express = require('express');
const bodyParser = require('body-parser');
const expressGraphql = require('express-graphql');
const { schema } = require('./schema/schema');
const { rootResolver } = require('./resolvers/rootResolver');
const { isUserAuthorized, getUserToken } = require('./auth/auth');


const app = express();
app.use(bodyParser.json());

app.post('/login', getUserToken);

app.use('/graphql', isUserAuthorized, expressGraphql({
  schema,
  rootValue: rootResolver,
  graphiql: true,
}));
app.listen(4000, () => console.log('Running on localhost 4000'));
