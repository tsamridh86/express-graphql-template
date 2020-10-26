const { coursesData } = require('../Objects/data');

const updateCourseTopic = ({ id, topic }) => {
  coursesData.forEach((course) => {
    if (course.id === id) {
      // eslint-disable-next-line no-param-reassign
      course.topic = topic;
    }
    return course;
  });
  return coursesData.filter((course) => course.id === id)[0];
};

module.exports = {
  updateCourseTopic,
};
