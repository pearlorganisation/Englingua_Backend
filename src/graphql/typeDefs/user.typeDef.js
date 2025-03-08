const userTypeDef = `#graphql
 enum Role {
    STUDENT
    ADMIN
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    gender: String!
    age: Int!
    mobileNumber: String!
    role: Role!
    blogs: [Blog!]!
    
  }
  type AuthPayload {
    token: String!
    user: User!
  }

   type Query {
    users: [User!]! # Returns a list of users
    user(id: ID!): User # Returns a user by their ID
    me: User # Returns the currently authenticated user
  }

  type Mutation {
    createUser(input: UserInput!): User!
    login(email: String!, password: String!): AuthPayload!
    }
  
  input UserInput {
    name: String!
    email: String!
    password: String!
    gender: String!
    age: Int!
    mobileNumber: String!
  }
  `;

export default userTypeDef;

//SDL (Schema Definition Language) is a syntax used to define the structure of a GraphQL API. It describes the types, queries, mutations, subscriptions, and relationships that are supported by the API in a human-readable format. SDL is at the core of GraphQL schema design and provides a way to define the schema using a declarative approach.
