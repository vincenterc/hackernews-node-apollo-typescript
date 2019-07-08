async function postedBy(parent: any, _args: any, context: any) {
  let link = await context.connection
    .getRepository(context.entities.Link)
    .findOne({ where: { id: parent.id }, relations: ["postedBy"] });

  return link.postedBy;
}

export default {
  postedBy
};
