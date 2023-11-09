import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quizzes: [
    {
      name: { type: String, required: true },
      topic: { type: String, required: true },
      dueDate: { type: Date, required: true },
      isAvailable: { type: Boolean, required: true, default: true },
      content: [
        {
          question: { type: String, required: true },
          answers: [{ type: String, required: true }],
          correctAnswer: { type: Number, required: true }, //number is the index of correct ansewer in answers
        },
      ],
    },
  ],
  assignments: [
    {
      name: { type: String, required: true },
      topic: { type: String, required: true },
      dueDate: { type: Date, required: true },
      content: [
        {
          question: { type: String, required: true },
          answers: [{ type: String, required: true }],
          correctAnswer: { type: Number, required: true }, //number is the index of correct ansewer in answers
        },
      ],
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);
export default Course;
