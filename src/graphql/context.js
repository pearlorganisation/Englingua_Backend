import jwt from "jsonwebtoken";
import prisma from "../utils/prismaClient.js";

export const context = async ({ req }) => {
  const token = req ? req.headers.authorization : null;

  if (token) {
    try {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
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
