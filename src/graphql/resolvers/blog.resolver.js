import prisma from "../../utils/prismaClient.js"; //we can also pass prisma in context

const blogResolver = {
  Mutation: {
    createBlog: async (_, { title, content, image, authorId, categoryId }) => {
      try {
        const newBlog = await prisma.blog.create({
          data: {
            title,
            content,
            image,
            author: { connect: { id: authorId } },
            category: categoryId ? { connect: { id: categoryId } } : undefined,
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
