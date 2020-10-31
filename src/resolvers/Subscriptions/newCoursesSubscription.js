const newCourseSubscription = (parent, args, context, info) => context.pubsub.asyncIterator('NEW_COURSE');

const newCourse = {
  subscribe: newCourseSubscription,
  resolve: (payload) => payload,
};


module.exports = {
  newCourse,
};
