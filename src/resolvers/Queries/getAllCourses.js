const { neo4jgraphql } = require('neo4j-graphql-js');
const { checkConnectionParams } = require('../../utils/utils');
const { coursesData } = require('../Objects/data');

const getAllCourses = (parent, args, context, info) => {
  return neo4jgraphql(parent,args,context,info)
};

module.exports = {
  getAllCourses,
};
