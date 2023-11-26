let books = [
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    // Add more books as needed
  ];
  
  const resolvers = {
    Query: {
      books: () => books,
    },

    Mutation: {
      createBook: (_, { title, author }) => {
        const newBook = { id: String(books.length + 1), title, author };
        books.push(newBook);
        return newBook;
      },
    },
    
  };
  
  module.exports = resolvers;
  