const blogResolver = {
  Mutation: {
    createBlog: async (_, { title, content, authorId }, { prisma }) => {
      return await prisma.blog.create({
        data: {
          title,
          content,
          author: { connect: { id: authorId } },
        },
        include: { author: true },
      });
    },
  },
};
