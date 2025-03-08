import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import blogTypeDef from "./blog.typeDef.js";
import categoryTypeDef from "./categoryTypeDef.js";
import unitTypeDef from "./unitTypeDef.js";

const mergedTypeDefs = mergeTypeDefs([
  userTypeDef,
  blogTypeDef,
  categoryTypeDef,
  unitTypeDef,
]);

export default mergedTypeDefs;

// The typeDefs/index.js file is responsible for merging all of the type definitions into a single schema. This is done using the mergeTypeDefs function from the @graphql-tools/merge package. The merged type definitions are then exported for use in the Apollo Server setup. The type definitions are stored in separate files in the typedefs directory and imported into the index.js file for merging. This separation of concerns helps to keep the codebase organized and maintainable.
