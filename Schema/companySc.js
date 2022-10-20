import mongoose from "mongoose";
const companyschema = new mongoose.Schema(
  {
    companyName: String,

    location: String,
    position: String,
    contract: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const comModal = mongoose.model("companies", companyschema);
export default comModal;
