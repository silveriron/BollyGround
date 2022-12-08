import mongoose, { Schema } from "mongoose";

export const PostSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    featured: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
