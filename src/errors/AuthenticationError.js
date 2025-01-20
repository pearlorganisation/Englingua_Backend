import { GraphQLError } from "graphql";

class AuthenticationError extends GraphQLError {
  constructor(message = "Unauthorized access") {
    super(message, {
      extensions: { code: "UNAUTHORIZED", status: 401 },
    });
  }
}

export default AuthenticationError;
