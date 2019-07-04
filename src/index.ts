import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    info: String!
  }
`;

const resolvers = {
  Query: {
    info: () => null // `This is the API of a Hackernews Clone`
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
