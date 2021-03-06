const newLinkSubscribe = async (parent, args, context, info) =>
  context.db.subscription.link({ where: { mutation_in: ['CREATED'] } }, info);

const newLink = {
  subscribe: newLinkSubscribe
};

const newVoteSubscribe = async (parent, args, context, info) =>
  context.db.subscription.vote({ where: { mutation_in: ['CREATED'] } }, info);

const newVote = {
  subscribe: newVoteSubscribe
};

module.exports = {
  newLink,
  newVote
};
