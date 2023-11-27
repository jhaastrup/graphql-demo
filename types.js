// type.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Meal {
    id: ID!
    chef: String!
    dish: String!
  }

  type Query {
    meals: [Meal]
  }

  type Mutation {
    createMeal(dish: String!, chef: String!): Meal
  }
`;

module.exports = typeDefs;
