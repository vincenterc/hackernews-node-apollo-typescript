import { Like } from "typeorm";

async function feed(_parent: any, args: any, context: any) {
  const where = args.filter
    ? [
        { description: Like(`%${args.filter}%`) },
        { url: Like(`%${args.filter}%`) }
      ]
    : {};

  let order = {};
  if (args.orderBy) {
    const [orderField, orderRule] = args.orderBy.split("_");
    order = { [orderField]: orderRule };
  }

  return await context.connection
    .getRepository(context.entities.Link)
    .find({ where, skip: args.skip, take: args.first, order });
}

export default {
  feed
};
