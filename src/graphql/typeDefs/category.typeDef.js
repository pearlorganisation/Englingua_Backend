const categoryTypeDef = `#graphql 
   type Category  {
    id: String!
    name: String!
    programId: String!
    units: [Unit]
    blogs: [Blog]
    type: CategoryType
    createdAt: String!
    updatedAt: String!
  }
  enum CategoryType {
    PROGRAM
    BLOG
  }
type CreateCategoryResponse {
  success: Boolean!
  message: String!
  data: Category!
}
  type Mutation {
    createCategory(input: CategoryInput!): CreateCategoryResponse!
    # updateCategory(id: String!, input: CategoryInput!): Category!
    # deleteCategory(id: String!): Boolean!
  }

  input CategoryInput {
    name: String!
    type: CategoryType!
  }
`;

export default categoryTypeDef;
