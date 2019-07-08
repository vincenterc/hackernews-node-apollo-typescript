import { PubSub } from "apollo-server";

export const pubSub = new PubSub();
export const NEW_LINK = "NEW_LINK";

const newLink = {
  subscribe: () => pubSub.asyncIterator(NEW_LINK)
};

export default {
  newLink
};
