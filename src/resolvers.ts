const Query = {
  info: () => `This is the API of a Hackernews Clone`,
  feed: async (_parent: any, _args: any, context: any) => {
    let Link = context.entities.Link;

    return await context.connection.getRepository(Link).find();
  }
};

const Mutation = {
  post: async (_parent: any, args: any, context: any) => {
    let Link = context.entities.Link;
    let link = new Link();
    link.url = args.url;
    link.description = args.description;

    return await context.connection.manager.save(link);
  }
};

export default {
  Query,
  Mutation
};
