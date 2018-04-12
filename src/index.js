const { GraphQLServer } = require('graphql-yoga');
const { readFileSync } = require('fs');

const typeDefs = readFileSync(__dirname + '/../schema.gql').toString();

const links = [
  {
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  }
];

const resolvers = {
  Query: {
    info: () => `This is the API with graphql`,
    feed: () => links
  },
  Link: {
    id: root => root.id,
    description: root => root.description,
    url: root => root.url
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
