const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const mongoose = require("mongoose");

// Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// Load db methods
const mongoDataMethods = require("./data/db");

// Connect to mongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://datvip10a1:dat682000@grapqltutorial.z5nepir.mongodb.net/?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();
server.applyMiddleware({
  app,
});

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
