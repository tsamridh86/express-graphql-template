/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');
const { isUserAuthorized, getUserToken } = require('../auth');

const secret = 'lol, you know you know it.';
test('gets user token if the user is correct', () => {
  const request = {
    body: {
      username: 'samridh',
      password: 'tuladhar',
    },
  };
  const response = {
    status: () => response,
    send: () => {},
  };
  const answer = getUserToken(request, response);
  const actualAnswer = jwt.sign(request.body, secret, { expiresIn: '3h' });
  expect(answer).toBe(actualAnswer);
});


test('returns funny reply if the user is not correct', () => {
  const reply = {
    reason: 'no username and password',
    message: 'thank you lol',
  };
  const request = {
    body: {
      username: 'samridh',
      password: 'wrong pwd',
    },
  };
  const response = {
    status: () => response,
    send: () => {},
  };
  const answer = getUserToken(request, response);
  expect(answer).toStrictEqual(reply);
});


test('allows entry to good user', () => {
  let hasCalled = false;
  const mockedNext = () => { hasCalled = true; return true; };
  const request = {
    body: {
      username: 'samridh',
      password: 'tuladhar',
    },
  };
  const response = {
    status: () => response,
    send: () => {},
  };
  const token = getUserToken(request, response);
  request.get = () => `Bearer ${token}`;
  isUserAuthorized(request, response, mockedNext);
  expect(hasCalled).toBe(true);
});

test('denies entry to bad user', () => {
  let hasCalled = false;
  const mockedNext = () => { hasCalled = true; return true; };
  const request = {
    body: {
      username: 'samridh',
      password: 'wrong pwd',
    },
  };
  const response = {
    status: () => response,
    send: () => {},
  };
  const token = getUserToken(request, response);
  request.get = () => `Bearer ${token}`;
  isUserAuthorized(request, response, mockedNext);
  expect(hasCalled).toBe(false);
});
