export const formatError = (error) => {
  if (process.env.NODE_ENV === "development") {
    console.error("GraphQL Error:", error);
  }

  return {
    message: error.message,
    code: error.extensions?.code || "INTERNAL_SERVER_ERROR",
    status: error.extensions?.status || 500,
  };
};
