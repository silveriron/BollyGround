import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { PostSchema } from "../../models/Post";

const dbConnect = async (
  _req: NextApiRequest,
  _res: NextApiResponse,
  next: Function
) => {
  if (!global.mongoose) {
    try {
      global.mongoose = await mongoose.connect(process.env.MONGODB_URL!);
      mongoose.model("Post", PostSchema);
    } catch (e) {
      console.log(e.message);
    }
  }
  return next();
};

export default dbConnect;
