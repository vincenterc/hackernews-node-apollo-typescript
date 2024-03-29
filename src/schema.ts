import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Date

  type Query {
    info: String!
    feed(
      filter: String
      skip: Int
      first: Int
      orderBy: LinkOrderByInput
    ): Feed!
  }

  type Mutation {
    post(url: String!, description: String!): Link!
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    vote(linkId: ID!): Vote
  }

  type Subscription {
    newLink: Link
    newVote: Vote
  }

  type Link {
    id: ID!
    createdAt: Date!
    description: String!
    url: String!
    postedBy: User
    votes: [Vote!]!
  }

  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
  }

  type Vote {
    id: ID!
    link: Link!
    user: User!
  }

  enum LinkOrderByInput {
    description_ASC
    description_DESC
    url_ASC
    url_DESC
    createdAt_ASC
    createdAt_DESC
  }

  type Feed {
    links: [Link!]!
    count: Int!
  }
`;

export default typeDefs;
