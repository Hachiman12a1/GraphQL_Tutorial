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
    authors : () => {
      return [
        {
          id : 1,
          name : "Ngo tat to",
          age : 27
        },
        {
          id : 2,
          name : "Nam Cao",
          age : 106
        },
        {
          id : 3,
          name : "Vu Trong Phung",
          age : 109
        }
      ]
    }
  },
};

module.exports = resolvers;
