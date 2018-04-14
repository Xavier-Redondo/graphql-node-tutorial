const info = () => `This is the API with graphql`;

const feed = (root, args, context, info) => context.db.query.links({}, info);

module.exports = {
  info,
  feed
};
