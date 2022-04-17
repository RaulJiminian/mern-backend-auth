import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Comment = new Schema({
  text: { type: String },
  blogId: { type: Schema.Types.ObjectId, ref: "blogs" },
});

export default mongoose.model("comments", Comment);
