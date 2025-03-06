const blogTypeDef = `#graphql 
   type Blog {
    id: String!
    title: String!
    content: String!
    image: String
    author: User!
    authorId: String!
    category: Category!
    categoryId: String!
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
  createBlog(title: String!, content: String!, image: String!, authorId: String!, categoryId: String): Blog!
}
`;

export default blogTypeDef;
