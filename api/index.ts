import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import announRoute from "./routes/announ.route.ts";
import quizRoute from "./routes/quiz.route.ts";
import path from "path";
dotenv.config();

mongoose
  .connect(process.env.MONGO!)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

__dirname = path.resolve();
console.log(__dirname);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/announ", announRoute);
app.use("/api/quiz", quizRoute);

app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
