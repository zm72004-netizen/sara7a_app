import mongoose from "mongoose";
import { env } from "../.././src/config/env.service.js";

const URI = env.URI_Database;

export const databaseConnection = async () => {
  try {
    mongoose.connect(URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};