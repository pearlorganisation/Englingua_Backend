import prisma from "../../utils/prismaClient.js"; //we can also pass prisma in context

const blogResolver = {
  Mutation: {
    createBlog: async (_, { title, content, author, authorId }) => {
      try {
        // Ensure the author exists
        const existingUser = await prisma.user.findUnique({
          where: { id: authorId },
        });

        if (!existingUser) {
          throw new Error("Author not found");
        }

        // Create the blog post
        const newBlog = await prisma.blog.create({
          data: {
            title,
            content,
            author,
            authorId: { connect: { id: authorId } }, // Connect to existing user
          },
          include: { author: true },
        });

        return newBlog;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

export default blogResolver;
