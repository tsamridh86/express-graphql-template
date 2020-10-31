const { checkConnectionParams } = require('../../utils/utils');
const { coursesData } = require('../Objects/data');

const getAllCourses = (parent, args, context, info) => {
  const {
    first, after, last, before, topic,
  } = args;
  let answer = coursesData;
  const [limit, cursor, direction] = checkConnectionParams({
    first, last, before, after,
  });
  if (topic) {
    answer = answer.filter((course) => course.topic === topic);
  }
  // this is a dirty implementation of limit, cursor and direction, use a database!
  if (direction > 0) {
    answer = answer.slice(cursor, cursor + limit);
  } else {
    answer = answer.slice(cursor - limit, cursor);
  }
  answer = answer.map((course, index) => ({ node: course, cursor: index }));
  return {
    edges: answer,
    pageInfo: {
      hasPreviousPage: cursor - limit > 0,
      hasNextPage: cursor + limit < coursesData.length,
      startCursor: cursor,
      endCursor: cursor + direction * limit,
    },
  };
};

module.exports = {
  getAllCourses,
};
