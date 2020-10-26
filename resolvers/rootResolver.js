const { getSingleCourse } = require('./Queries/getSingleCourse');
const { getAllCourses } = require('./Queries/getAllCourses');
const { updateCourseTopic } = require('./Mutations/updateCourseProps');

const rootResolver = {
  course: getSingleCourse,
  courses: getAllCourses,
  updateCourseTopic,
};

module.exports = {
  rootResolver,
};
