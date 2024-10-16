import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";

const connectDb = async () => {
  try {
    console.log(process.env.MONGODB_URI)
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.log("MongoDb connection error: ",err);
    process.exit(1);
  }
};

export default connectDb