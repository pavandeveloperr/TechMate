import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to Mongodb database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in ${error}`);
  }
};

export default connectDB;
