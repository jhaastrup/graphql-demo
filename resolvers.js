let meals = [
    { id: '1', dish: 'Coconut Rice', chef: 'Hilda Baci' },
    { id: '2', dish: 'MeatLoaf', chef: 'Gordon Ramsy' },
    // Add more meals as needed
  ];
  
  const resolvers = {
     //resolve the queries
    Query: {
      meals: () => meals,
    },


    //resolve the mutations
    Mutation: {
      createMeal: (_, { dish, chef }) => {
        const newMeal = { id: String(meals.length + 1), dish, chef };
        meals.push(newMeal);
        return newMeal;
      },
    },

  };
  
  module.exports = resolvers;
  