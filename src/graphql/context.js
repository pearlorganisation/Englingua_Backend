import jwt from "jsonwebtoken";
import prisma from "../utils/prismaClient.js";

export const context = async ({ req }) => {
  const token = req ? req.headers.authorization : null;

  if (token) {
    try {
      const { userId } = jwt.verify(
        token,
        process.env.JWT_SECRET || "your-secret-key"
      );
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      return { user };
    } catch (error) {
      console.error("Invalid token:", error);
      return { user: null };
    }
  }

  return { user: null };
};
