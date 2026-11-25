import express from "express";
import { connectDB } from "./config/db.js";
import "dotenv/config";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
})().catch(console.error);
