import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log(`database is connected`);
});

const app = express();
app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log(`backend is running on ${port}..!!`);
});

app.use(`/api/user`, userRoutes);
app.use(`/api/auth`, authRoutes);
