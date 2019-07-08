async function link(parent: any, _args: any, context: any) {
  let vote = await context.connection
    .getRepository(context.entities.Vote)
    .findOne({ where: { id: parent.id }, relations: ["link"] });

  return vote.link;
}

async function user(parent: any, _args: any, context: any) {
  let vote = await context.connection
    .getRepository(context.entities.Vote)
    .findOne({ where: { id: parent.id }, relations: ["user"] });

  return vote.user;
}

export default {
  link,
  user
};
