import { Like } from "typeorm";

async function feed(_parent: any, args: any, context: any) {
  const where = args.filter
    ? [
        { description: Like(`%${args.filter}%`) },
        { url: Like(`%${args.filter}%`) }
      ]
    : {};

  return await context.connection
    .getRepository(context.entities.Link)
    .find({ where, skip: args.skip, take: args.first });
}

export default {
  feed
};
