const jwt = require('jsonwebtoken');

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
    const answer = jwt.verify(token, secret);
    console.log(answer);
    next();
  } catch (err) {
    response.status(500).send(reply);
  }
  return null;
};


const getUserToken = (request, response) => {
  const { username, password } = request.body;
  if (username && password) {
    const token = jwt.sign({ username, password }, secret);
    response.send({ token });
  } else {
    const reply = {
      reason: 'no username and password',
      message: 'thank you lol',
    };
    response.status(500).send(reply);
  }
};

module.exports = {
  isUserAuthorized,
  getUserToken,
};
