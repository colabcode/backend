import config from "@config";
import graphql from "express-graphql";
import schema from "./features";

const graphiql = !config.env.production;

export default app => {
  app.use(
    "/graphql",
    graphql({
      schema,
      graphiql
    })
  );
};
