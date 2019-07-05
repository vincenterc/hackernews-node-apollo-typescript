import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { APP_SECRET, getUserId } from "../utils";

async function post(_parent: any, args: any, context: any) {
  const userId = getUserId(context);
  let Link = context.entities.Link;
  let link = new Link();
  link.url = args.url;
  link.description = args.description;
  link.postedBy = userId;

  return await context.connection.manager.save(link);
}

async function signup(_parent: any, args: any, context: any) {
  const password = await bcrypt.hash(args.password, 10);
  let User = context.entities.User;
  let user = new User();
  user.email = args.email;
  user.name = args.name;
  user.password = password;
  user = await context.connection.manager.save(user);
  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}

async function login(_parent: any, args: any, context: any) {
  let User = context.entities.User;
  let user = context.connection
    .getRepository(User)
    .findOne({ email: args.email });

  if (!user) throw new Error("No such user found");

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) throw new Error("Invalid password");

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
}

export default {
  post,
  signup,
  login
};
