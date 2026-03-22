import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  url: {type: String, required: true},
  shortUrl: {type: String, required: true}
}, { timestamps: true });

export default mongoose.models.Link || mongoose.model("Link", LinkSchema)