import mongoose from "mongoose";
import dns from "node:dns";
import "dotenv/config";

export async function connectDB() {
  if (!process.env.MONGODBURI) {
    throw new Error("Please set MONGODBURI in your .env file!");
  }

  dns.setServers(["8.8.8.8", "1.1.1.1"]);

  await mongoose.connect(process.env.MONGODBURI!);
  console.log("You successfully connected to MongoDB!");
  return mongoose;
}

export async function disconnectDB() {
  await mongoose.connection.close();
}
