const Mutations = `
type Mutation {
    updateCourseTopic ( id: Int! , topic: String! ): Course
}
`;

module.exports = {
  Mutations,
};
