const { coursesData } = require('../Objects/data');

const updateCourseTopic = (parent, { id, topic }, context, info) => {
  coursesData.forEach((course) => {
    if (course.id === id) {
      // eslint-disable-next-line no-param-reassign
      course.topic = topic;
    }
    return course;
  });
  const updatedCourse = coursesData.find((course) => course.id === id);
  context.pubsub.publish('NEW_COURSE', updatedCourse);
  return updatedCourse;
};

module.exports = {
  updateCourseTopic,
};
