const jwt = require('jsonwebtoken');
const { isVerifiedUser } = require('./authFacade');

const secret = 'lol, you know you know it.';

const isUserAuthorized = (request, response, next) => {
  const reply = {
    reason: 'Bad token',
    message: 'thanks for trying tho',
  };
  if (request.get('Authorization') === undefined) { response.status(500).send(reply); return null; }

  const bearerToken = request.get('Authorization');
  const [bearer, token] = bearerToken.split(' ');
  if (bearer !== 'Bearer') { response.status(500).send(reply); return null; }
  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    response.status(500).send(reply);
  }
  return null;
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
  return response.status(500).send(reply);
};

module.exports = {
  isUserAuthorized,
  getUserToken,
};
