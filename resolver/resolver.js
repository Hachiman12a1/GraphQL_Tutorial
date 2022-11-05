const { books, authors } = require("../data/static");

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) =>
      books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id.toString() === args.id),
  },

  Book: {
    author: (parent, args) =>
      authors.find((author) => author.id === parent.authorId),
  },
  Author: {
    books: (parent, args) =>
      books.filter((book) => book.authorId === parent.id),
  },
};

module.exports = resolvers;
