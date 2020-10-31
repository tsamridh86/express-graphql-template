const jwt = require('jsonwebtoken');
const { isVerifiedUser } = require('./authFacade');

const secret = 'lol, you know you know it.';

const isUserAuthorized = async (resolve, root, args, context, info) => {
  const reply = {
    reason: 'Bad token',
    message: 'thanks for trying tho',
  };
  if (context.request.get('Authorization') === undefined) { throw reply; }

  const bearerToken = context.request.get('Authorization');
  const [bearer, token] = bearerToken.split(' ');
  if (bearer !== 'Bearer') { throw reply; }
  try {
    jwt.verify(token, secret);
    const result = await resolve(root, args, context, info);
    return result;
  } catch (err) {
    throw reply;
  }
};


const getUserToken = (request, response) => {
  const { username, password } = request.body;
  if (username && password) {
    if (isVerifiedUser(username, password)) {
      const token = jwt.sign({ username, password }, secret, { expiresIn: '3h' });
      response.send({ token });
      return token;
    }
  }
  const reply = {
    reason: 'no username and password',
    message: 'thank you lol',
  };
  response.status(500).send(reply);
  return reply;
};

module.exports = {
  isUserAuthorized,
  getUserToken,
};
