const { getSingleCourse } = require('./Queries/getSingleCourse');
const { getAllCourses } = require('./Queries/getAllCourses');
const { updateCourseTopic } = require('./Mutations/updateCourseProps');
const { newCourse } = require('./Subscriptions/newCoursesSubscription');
const { Objects } = require('./Objects/objects');

const rootResolver = {
  Query: {
    course: getSingleCourse,
    courses: getAllCourses,
  },
  Mutation: {
    updateCourseTopic,
  },
  Subscription: {
    newCourse,
  },
  ...Objects,
};

module.exports = {
  rootResolver,
};
