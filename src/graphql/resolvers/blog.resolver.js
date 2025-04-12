import prisma from "../../utils/prismaClient.js"; //we can also pass prisma in context

const blogResolver = {
  Mutation: {
    createBlog: async (_, { input }) => {
      try {
        console.log("input: ", input);
        const newBlog = await prisma.blog.create({
          data: {
            title: input.title,
            content: input.content,
            image: input.image,
            author: { connect: { id: input.authorId } },
            // category: categoryId
            //   ? { connect: { id: input.categoryId } }
            //   : undefined,
          },
        });
        return newBlog;
      } catch (error) {
        throw new Error(`Failed to create blog: ${error.message}`);
      }
    },
  },
};

export default blogResolver;
