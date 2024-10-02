import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "../.env" });

const DB_Connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (error) {
    console.log(error);
  }
};

export default DB_Connection;
