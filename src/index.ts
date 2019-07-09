import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import entities from "./entities";

const entityArray = Object.keys(entities).reduce(
  (acc, key) => [...acc, entities[key]],
  []
);

createConnection({
  type: "sqlite",
  database: "db.sqlite3",
  synchronize: true,
  logging: false,
  entities: entityArray
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
