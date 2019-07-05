import jwt from "jsonwebtoken";

export const APP_SECRET = "GraphQL";

export function getUserId(context: any) {
  const Authorization = context.request.req.headers.authorization;

  if (Authorization) {
    const token = Authorization.replace("JWT ", "");
    const { userId } = <any>jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error("Not authenticated");
}
