import { users } from "../../../dummyData.js";
import prisma from "../../utils/prismaClient.js";

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

  Mutation: {
    createUser: async (_, { input }) => {
      return await prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          password: input.password,
          gender: input.gender,
          age: input.age,
          mobileNumber: input.mobileNumber,
        },
      });
    },
  },
};

export default userResolver;
