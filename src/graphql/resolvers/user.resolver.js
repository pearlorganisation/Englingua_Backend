import prisma from "../../utils/prismaClient.js";

const userResolver = {
  Query: {},

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
