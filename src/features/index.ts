import { GraphQLObjectType, GraphQLSchema } from "graphql";

import mutation from "./mutation";
import query from "./query";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "DataQuery",
    description: `This is a way of fetching data.`,
    fields: () => query
  }),
  mutation: new GraphQLObjectType({
    name: "DataMutation",
    description:
      "This is a way of data mutation. Update, create, delete of entity. Types are strict.",
    fields: () => mutation
  })
});
