import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import blogResolver from "./blog.resolver.js";
import categoryResolver from "./category.resolver.js";

const mergedResolvers = mergeResolvers([
  userResolver,
  blogResolver,
  categoryResolver,
]);

export default mergedResolvers;
// The resolvers/index.js file is responsible for merging all of the resolvers into a single schema. This is done using the mergeResolvers function from the @graphql-tools/merge package. The merged resolvers are then exported for use in the Apollo Server setup. The resolvers are stored in separate files in the resolvers directory and imported into the index.js file for merging. This separation of concerns helps to keep the codebase organized and maintainable.
