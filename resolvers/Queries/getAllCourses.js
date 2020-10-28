const { coursesData } = require('../Objects/data');

const getAllCourses = (parent, args, context, info) => {
  if (args.topic) {
    const { topic } = args;
    return coursesData.filter((course) => course.topic === topic);
  }
  return coursesData;
};

module.exports = {
  getAllCourses,
};
