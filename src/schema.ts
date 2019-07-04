import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

export default typeDefs;
