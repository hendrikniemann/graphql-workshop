import { ApolloServer } from "apollo-server";
import { schema } from "./graphql/schema";
import * as mongoose from "mongoose";

// ----- Connect to Mongo DB

if (!process.env.MONGODB_URL) {
  throw new Error("Missing environment variable MONGODB_URL");
}

const db = mongoose.connect(process.env.MONGODB_URL);

db.on("error", (error) => {
  console.error("Error connecting to Mongo DB:");
  console.error(error);
});

db.on("open", () => {
  console.log("Now connected to Mongo DB!");
});

// ----- Run Apollo Server

const server = new ApolloServer({
  schema,
});

server.listen(8080).then(() => console.log("Server running on port 8080!"));
