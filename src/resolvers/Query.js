const info = async () => `This is the API with graphql`;

const feed = async (root, args, context, info) => {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter }
        ]
      }
    : {};

  const queriedLinkes = await context.db.query.links(
    { where, skip: args.skip, first: args.first, orderBy: args.orderBy },
    `{ id }`
  );

  const countSelectionSet = `
    {
      aggregate {
        count
      }
    }
  `;

  const linksConnection = await context.db.query.linksConnection(
    {},
    countSelectionSet
  );

  console.log('puta merda', queriedLinkes);

  return {
    count: linksConnection.aggregate.count,
    linkIds: queriedLinkes.map(link => link.id)
  };
};

module.exports = {
  info,
  feed
};
