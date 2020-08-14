import { GraphQLSchema } from "graphql";
import { Query } from "./types";

export const schema = new GraphQLSchema({
  query: Query,
});
