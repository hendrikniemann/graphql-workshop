import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLList,
  GraphQLID,
} from "graphql";
import { PetModel } from "../models";

export const Animal = new GraphQLEnumType({
  name: "Animal",
  description:
    "In our pet shelter we house dogs, cats and rabbits. This type is used to reference one of their types.",
  values: {
    DOG: { value: "DOG" },
    CAT: { value: "CAT" },
    RABBIT: { value: "RABBIT" },
  },
});

export const Pet = new GraphQLObjectType({
  name: "Pet",
  description: "This is a pet that is or was a guest in our shelter.",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The name of this pet.",
    },
    animal: {
      type: new GraphQLNonNull(Animal),
      resolve(parent, args, context, info) {
        return parent.type;
      },
    },
    breed: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLInt,
    },
  },
});

export const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: new GraphQLNonNull(GraphQLString),
      description: "This field greets everyone.",
      args: {
        firstName: {
          type: GraphQLString,
          description: "The name of the person to greet.",
        },
      },
      resolve: (parent, args, context, info) => {
        if (args.firstName) {
          return `Hello ${args.firstName}!`;
        }
        return `Hello World!`;
      },
    },
    pet: {
      type: Pet,
      description:
        "Waldo is the shelters very own dog and not up for adoption!",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve(parent, args, context, info) {
        return PetModel.findById(args.id);
      },
    },
    pets: {
      type: new GraphQLList(Pet),
      resolve() {
        return PetModel.find();
      },
    },
  },
});
