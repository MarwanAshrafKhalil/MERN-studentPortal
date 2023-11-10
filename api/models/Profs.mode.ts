import mongoose from "mongoose";

const profSchema = new mongoose.Schema({
  name: { type: String, required: true },

  announcements: [
    {
      title: String,
      content: String,
      createdAt: Date,
    },
  ],
});

const Prof = mongoose.model("Prof", profSchema);
export default Prof;
