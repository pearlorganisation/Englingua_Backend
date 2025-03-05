const blogTypeDef = `#graphql 
   type Blog {
    id: ID!
    title: String!
    content: String!
    author: User!
    authorId: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createBlog(title: String!, content: String!, author: String!, authorId: Int!): Blog!
  }
`;

export default blogTypeDef;
