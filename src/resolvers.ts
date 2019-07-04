let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

const Query = {
  info: () => null, // `This is the API of a Hackernews Clone`
  feed: () => links
};

export default {
  Query
};
