const { coursesData } = require('../Objects/data');

const getSingleCourse = (args) => {
  const { id } = args;
  return coursesData.filter((course) => course.id === id)[0];
};

module.exports = {
  getSingleCourse,
};
