const { coursesData } = require('../Objects/data');

const getAllCourses = (args) => {
  if (args.topic) {
    const { topic } = args;
    return coursesData.filter((course) => course.topic === topic);
  }
  return coursesData;
};

module.exports = {
  getAllCourses,
};
