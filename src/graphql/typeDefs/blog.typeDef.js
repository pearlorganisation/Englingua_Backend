const blogTypeDef = `#graphql 
   type Blog {
    id: ID!
    title: String!
    content: String!
    author: User!
    createdAt: String!
    updatedAt: String!
  }
  type Mutation {
    createBlog(title: String!, content: String!, authorId: Int!): Blog!
  }
`;

export default blogTypeDef;
