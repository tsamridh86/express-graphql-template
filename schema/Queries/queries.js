const Queries = `
type Query {
    course (id : Int! ): Course
    courses ( topic: String ) : [ Course ]
}`;

module.exports = {
  Queries,
};
