import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { startApolloServer } from "./src/apollo/apolloServer.js"; // Import the Apollo Server startup logic

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
const httpServer = http.createServer(app);

// Middleware for Express
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("APIs are working...");
  console.log("Working..");
});

// Start Apollo Server
await startApolloServer(httpServer, app);

// Start the HTTP server
await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
console.log(`GraphQL Server ready at http://localhost:${PORT}/graphql`);
