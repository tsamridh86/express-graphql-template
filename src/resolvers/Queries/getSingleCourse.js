const { coursesData } = require('../Objects/data');
const { neo4jgraphql } = require('neo4j-graphql-js');

const getSingleCourse = (parent, args, context, info) => {
  return neo4jgraphql(parent,args,context,info)
};

module.exports = {
  getSingleCourse,
};
