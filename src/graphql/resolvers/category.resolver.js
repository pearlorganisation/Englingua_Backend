import prisma from "../../utils/prismaClient.js";

const categoryResolver = {
  Mutation: {
    createCategory: async (_, { input }) => {
      // Check if category with the same name already exists
      const existingCategory = await prisma.category.findUnique({
        where: { name: input.name },
      });

      if (existingCategory) {
        throw new Error("A category with this name already exists");
      }

      // Create new category
      const newCategory = await prisma.category.create({
        data: {
          name: input.name,
          type: input.type,
        },
      });
      return {
        success: true,
        message: "Category created successfully.",
        data: newCategory, // Return the full category object in 'data'
      };
    },
  },
};

export default categoryResolver;
