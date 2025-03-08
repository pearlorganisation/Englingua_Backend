const unitTypeDef = `#graphql
  type Unit {
    id: String!
    title: String!
    discussionTopic: String
    listeningText:   String
    readingText: String
    languageWork: [String]!
    skills: [String]!
    caseStudy: String
    levelId: String!
    categoryId: String!
    createdAt: String!
    updatedAt: String!
  }
`;

export default unitTypeDef;
