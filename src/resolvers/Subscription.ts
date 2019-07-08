import { PubSub } from "apollo-server";

export const pubSub = new PubSub();
export const NEW_LINK = "NEW_LINK";
export const NEW_VOTE = "NEW_VOTE";

const newLink = {
  subscribe: () => pubSub.asyncIterator(NEW_LINK)
};

const newVote = {
  subscribe: () => pubSub.asyncIterator(NEW_VOTE)
};

export default {
  newLink,
  newVote
};
