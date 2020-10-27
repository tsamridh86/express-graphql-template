const Objects = {
  Course: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
    author: (parent) => `${parent.author}, Samridh Tuladhar`,
    description: (parent) => parent.description,
    topic: (parent) => parent.topic,
    url: (parent) => parent.url,
  },
};

module.exports = {
  Objects,
};
