import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import contact_usRoutes from "./routes/contact-us.route.js";

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
app.use(`/api`, contact_usRoutes);

app.use((err, req, res, next) => {
  const status_code = err.status_code || 500;
  const message = err.message || "Internal Server Error";
  res.status(status_code).json({
    success: false,
    status_code,
    message,
  });
});
