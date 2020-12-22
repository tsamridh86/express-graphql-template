const Objects = `

type CourseConnection{
  edges : [CourseEdge] @relation(name: "CourseEdge", direction: "OUT")
  pageInfo : PageInfo @relation(name: "PageInfo", direction: "OUT")
}

type CourseEdge {
  node : Course! @relation(name: "Course", direction: "OUT")
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
