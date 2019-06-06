import config from "../config";
import graphql from "express-graphql";
import schema from "./features";

const graphiql = !config.env.prod;

export default (app: any) => {
  app.use(
    "/graphql",
    graphql({
      schema,
      graphiql
    })
  );
};
