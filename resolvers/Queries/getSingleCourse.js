const { coursesData } = require('../Objects/data');

const getSingleCourse = (parent, args, context, info) => {
  const { id } = args;
  return coursesData.filter((course) => course.id === id)[0];
};

module.exports = {
  getSingleCourse,
};
