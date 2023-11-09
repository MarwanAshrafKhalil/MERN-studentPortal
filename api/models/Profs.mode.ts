import mongoose from "mongoose";

const profSchema = new mongoose.Schema({
  name: { type: String, required: true },

  announcements: [
    {
      title: { type: String },
      content: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Prof = mongoose.model("Prof", profSchema);
export default Prof;
