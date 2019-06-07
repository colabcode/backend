import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";

const Snippet = new GraphQLObjectType({
  name: "Snippet",
  fields: {
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: "UUID of Snippet."
    },
    author: {
      type: GraphQLNonNull(GraphQLString),
      description: "Author Username of Snippet."
    },
    value: {
      type: GraphQLString,
      description: "Value(Code) of Snippet."
    },
    //TODO: Add enum.
    type: {
      type: GraphQLString,
      description: "Type of Snippet."
    }
  }
});

export default Snippet;
