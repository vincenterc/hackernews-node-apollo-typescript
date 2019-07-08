async function links(parent: any, _args: any, context: any) {
  let user = await context.connection
    .getRepository(context.entities.User)
    .findOne({ where: { id: parent.id }, relations: ["links"] });

  return user.links;
}

export default {
  links
};
