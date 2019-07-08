async function feed(_parent: any, _args: any, context: any) {
  let Link = context.entities.Link;

  return await context.connection
    .getRepository(Link)
    .find();
}

export default {
  feed
};
