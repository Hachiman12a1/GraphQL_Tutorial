const resolvers = {
  Query: {
    books: () => {
      return [
        {
          id: 1,
          name: "de men phieu luu ki",
          genre: "Adventure",
        },
        {
          id: 2,
          name: "Lam giau khong kho",
          genre: "Education",
        },
      ];
    },
  },
};

module.exports = resolvers;
