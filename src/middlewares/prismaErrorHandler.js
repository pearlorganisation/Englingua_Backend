export const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Handle Prisma Unique Constraint Error (P2002)
  if (err.code === "P2002") {
    return res.status(409).json({
      msg: "Conflict Error",
      status: false,
      error: `The provided ${err.meta?.target?.join(
        ", "
      )} already exists. Please use a different one.`,
    });
  }

  // Handle validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      msg: "Validation Error",
      status: false,
      error: err.message,
    });
  }

  // Default Internal Server Error
  res.status(500).json({
    msg: "Internal Server Error",
    status: false,
    error: "Something went wrong. Please try again later.",
  });
};
