const { GraphQLServer } = require('graphql-yoga');

const links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API with graphql`,
    feed: () => links
  },
  Mutation: {
    // root -> result of the previous resolver execution level. They are nested according to the Query json structure.
    // args -> arguments for the operation, the elements in the () in the schema definition
    post: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    }
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
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
