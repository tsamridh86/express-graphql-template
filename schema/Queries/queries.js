const Queries = `
type Query {
    course (id : Int! ): Course
    courses ( first:Int, after: Int, last: Int, before: Int, topic: String ) : CourseConnection
}`;

module.exports = {
  Queries,
};
