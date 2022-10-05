import express from "express";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRouter);
app.use("/api/posts/", postRouter);

app.listen(3001, (req, res) => {
  console.log("Server listening on PORT 3001...");
});
