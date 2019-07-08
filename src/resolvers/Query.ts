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

  let [links, count] = await context.connection
    .getRepository(context.entities.Link)
    .findAndCount({ where, skip: args.skip, take: args.first, order });

  return { links, count };
}

export default {
  feed
};
