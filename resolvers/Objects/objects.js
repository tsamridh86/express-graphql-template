const { coursesData } = require('./data');

const Objects = {
  Course: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
    author: (parent) => `${parent.author}, Samridh Tuladhar`,
    description: (parent) => parent.description,
    topic: (parent) => parent.topic,
    url: (parent) => parent.url,
  },
  CourseConnection: {
    edges: (parent) => parent.edges,
    pageInfo: (parent) => parent.pageInfo,
  },
  CourseEdge: {
    node: (parent) => parent.node,
    cursor: (parent) => parent.cursor,
  },
  PageInfo: {
    hasPreviousPage: (parent) => parent.hasPreviousPage,
    hasNextPage: (parent) => parent.hasNextPage,
    startCursor: (parent) => parent.startCursor,
    endCursor: (parent) => {
      let endCursor = parent.endCursor > coursesData.length
        ? coursesData.length : parent.endCursor;
      endCursor = endCursor < 0 ? 0 : endCursor;
      return endCursor;
    },
  },
};

module.exports = {
  Objects,
};
