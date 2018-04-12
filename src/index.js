const { GraphQLServer } = require('graphql-yoga');
const { readFileSync } = require('fs');

const typeDefs = readFileSync(__dirname + '/../schema.gql').toString();

const resolvers = {
  Query: {
    info: () => `This is the API with graphql`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
