import { users } from "../../../dummyData.js";

const userResolver = {
  Query: {
    users: () => users,
    user: async (_, { id }) => {
      const user = users.find((user) => user._id === id);
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      return user;
    },
  },
};

export default userResolver;
