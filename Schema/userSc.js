import mongoose from "mongoose";
const userschema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    role: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const userModal = mongoose.model("users", userschema);
export default userModal ;