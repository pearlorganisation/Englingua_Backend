import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import blogResolver from "./blog.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, blogResolver]);
