// type.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String!, author: String!): Book
  }
`;

module.exports = typeDefs;
