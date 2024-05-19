import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGODB_URI;
    const connectInstance = await mongoose.connect(
      `${connectionString}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected || DB HOST: ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection error", error);
    process.exit(1);
  }
};

export { connectDB };
