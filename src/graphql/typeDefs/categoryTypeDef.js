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
`;

export default categoryTypeDef;
