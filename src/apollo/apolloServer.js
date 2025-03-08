import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import mergedTypeDefs from "../graphql/typeDefs/index.js";
import userResolver from "../graphql/resolvers/user.resolver.js";
import { formatError } from "../errors/formatError.js";
import { context } from "../graphql/context.js";

export const startApolloServer = async (httpServer, app) => {
  const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: userResolver,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })], //Plugin ensures the HTTP server stops accepting new connections and gracefully closes existing ones during the shutdown process.
    formatError,
  });
  await server.start();
  app.use("/graphql", expressMiddleware(server, { context }));
};

//The formatError function is a custom error formatting mechanism in Apollo Server. It allows you to control how GraphQL errors are formatted before they are sent to the client.
