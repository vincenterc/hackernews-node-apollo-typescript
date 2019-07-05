import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import entities from "./entities";

createConnection({
  type: "sqlite",
  database: "db.sqlite3",
  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"]
})
  .then(connection => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: request => ({
        request,
        connection,
        entities
      })
    });

    server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
  })
  .catch(error => console.log(error));
