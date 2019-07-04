import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    info: String!
    feed: [Link!]!
    link(id: ID!): Link
  }

  type Mutation {
    post(url: String!, description: String!): Link!
    updateLink(id: ID!, url: String, description: String): Link
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

export default typeDefs;