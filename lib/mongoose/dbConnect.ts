import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { PostSchema } from "../../models/Post";

export const connect: { mongoose: any } = {
  mongoose,
};

const dbConnect = async (
  _req: NextApiRequest,
  _res: NextApiResponse,
  next: Function
) => {
  if (!connect.mongoose) {
    try {
      connect.mongoose = await mongoose.connect(process.env.MONGODB_URL!);
      mongoose.model("Post", PostSchema);
    } catch (e: any) {
      console.log(e.message);
    }
  }
  return next();
};

export default dbConnect;
