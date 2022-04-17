import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Blog = new Schema({
  title: { type: String },
  image: { type: String },
  tagline: { type: String },
  description: { type: String },
  comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  // category: {type: Schema.Types.ObjectId, ref: "categories"}
});

export default mongoose.model("blogs", Blog);
