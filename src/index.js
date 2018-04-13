const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    info: () => `This is the API with graphql`,
    feed: () => (root, args, context, info) => context.db.query.links({}, info)
  },
  Mutation: {
    // root -> result of the previous resolver execution level. They are nested according to the Query json structure.
    // args -> arguments for the operation, the elements in the () in the schema definition
    post: (root, args, context, info) =>
      context.db.mutation.createLink(
        {
          data: {
            url: args.url,
            description: args.description
          }
        },
        info
      )
  }
  // Not needed because graphQL infers them
  /* , Link: {
    id: root => root.id,
    description: root => root.description,
    url: root => root.url
  } */
};

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466/hackernews-node/dev',
    secret: 'mysecret123',
    debug: true
  })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
