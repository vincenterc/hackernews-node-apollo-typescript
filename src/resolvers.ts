let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;

const Query = {
  info: () => null, // `This is the API of a Hackernews Clone`
  feed: () => links,
  link: (_: any, { id }: any) => {
    const index = links.findIndex(link => link.id === id);

    return index > -1 ? links[index] : null;
  }
};

const Mutation = {
  post: (parent: any, args: any) => {
    const link = {
      id: `link-${idCount++}`,
      description: args.description,
      url: args.url
    };

    links.push(link);

    return link;
  },

  updateLink: (_: any, { id, url, description }: any) => {
    const index = links.findIndex(link => link.id === id);
    const link = { id, url, description };
    links[index] = link;

    return link;
  }
};

export default {
  Query,
  Mutation
};
