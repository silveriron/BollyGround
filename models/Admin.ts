import mongoose, { Schema } from "mongoose";

export const adminSchema = new Schema({
  id: {
    type: String,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Admin || mongoose.model("Admin", adminSchema);
