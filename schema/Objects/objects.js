const Objects = `

type CourseConnection{
  edges : [CourseEdge]
  pageInfo : PageInfo
}

type CourseEdge {
  node : Course!
  cursor : Int!
}

type PageInfo {
  hasPreviousPage : Boolean!
  hasNextPage : Boolean!
  startCursor: Int!
  endCursor: Int!
}
type Course {
    id : Int
    title: String
    author: String
    description: String
    topic: String
    url : String
}
`;

module.exports = {
  Objects,
};
