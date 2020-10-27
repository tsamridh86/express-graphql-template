const verifiedUsers = [
  {
    username: 'samridh',
    password: 'tuladhar',
  },
  {
    username: 'admin',
    password: 'minda',
  },
];

const isVerifiedUser = (username, password) => {
  const foundUser = verifiedUsers.find(
    (user) => user.username === username && user.password === password,
  );
  return !!foundUser;
};


module.exports = {
  isVerifiedUser,
};
