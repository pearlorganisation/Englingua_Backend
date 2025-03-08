import prisma from "../../utils/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthenticationError from "../../errors/AuthenticationError.js";

const userResolver = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    me: async (_, __, { user }) => {
      if (!user) {
        throw new AuthenticationError("Unauthorized access");
      }
      return await prisma.user.findUnique({
        where: { id: user.id },
        include: { blogs: true },
      });
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { name, email, password, gender, age, mobileNumber, role } = input;

      // Check if user with email already exists
      const existingUserByEmail = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUserByEmail) {
        throw new Error("A user with this email already exists");
      }

      // Check if user with mobile number already exists
      const existingUserByMobile = await prisma.user.findUnique({
        where: { mobileNumber },
      });

      if (existingUserByMobile) {
        throw new Error("A user with this mobile number already exists");
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          gender,
          age,
          mobileNumber,
          role: role || "STUDENT",
        },
      });

      return newUser;
    },
    login: async (_, { email, password }) => {
      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new Error("No user found with this email");
      }

      // Verify password
      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        throw new Error("Invalid password");
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || "your-secret-key",
        {
          expiresIn: "1d",
        }
      );

      return {
        token,
        user,
      };
    },
  },
};

export default userResolver;
