async function post(_parent: any, args: any, context: any) {
  let Link = context.entities.Link;
  let link = new Link();
  link.url = args.url;
  link.description = args.description;

  return await context.connection.manager.save(link);
}

export default {
  post
};
