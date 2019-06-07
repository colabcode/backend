import { GraphQLString, GraphQLList } from "graphql";
import Snippet from "./model";

export default {
  snippet: {
    type: Snippet.type,
    description: "Way to fetch Snippet.",
    args: {
      id: {
        name: "id",
        description: "ID of Ticket.",
        type: GraphQLString
      }
    },
    resolve: Snippet.resolve.get.one
  },
  snippets: {
    type: GraphQLList(Snippet.type),
    description: "Way to fetch all Snippets.",
    resolve: Snippet.resolve.get.all
  }
};
