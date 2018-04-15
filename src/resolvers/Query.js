const info = async () => `This is the API with graphql`;

const feed = async (root, args, context, info) =>
  context.db.query.links({}, info);

module.exports = {
  info,
  feed
};
