import { GraphQLError } from "graphql";

class NotFoundError extends GraphQLError {
  constructor(message = "Resource not found") {
    super(message, {
      extensions: {
        code: "NOT_FOUND", // Custom error code
        status: 404, // HTTP status code for "Not Found"
      },
    });
  }
}

export default NotFoundError;
