import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(
    process.env.MONGODB
  )
  .then(() => {
    console.log(`database is connected`);
  });

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`backend is running on ${port}..!!`);
});
