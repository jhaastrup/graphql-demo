const { ApolloServer } = require('apollo-server');
const typeDefs = require('./types');
const resolvers = require('./resolvers');



// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
