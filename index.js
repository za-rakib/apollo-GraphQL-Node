const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const port = 5000;
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

//database connection
const SERVER_URI = `mongodb+srv://rakib:rakib9090@cluster0.zqlov.mongodb.net/graphqlPractice?retryWrites=true&w=majority`;
mongoose
  .connect(SERVER_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Error Connect", err));

// //Queries
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// //Resolvers
// const resolvers = {
//   Query: {
//     hello: () => {
//       return "Hello World";
//     },
//   },
// };

//server connection
const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(port, () => console.log(`server running  in port ${port}`));
};

startServer();
