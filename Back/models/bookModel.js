import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Assuming title is required
    },
    publishYear: {
      type: Number,
      required: true, // Assuming publishYear is required
    },
    author: {
      type: String,
      required: true, // Assuming author is required
    },
  },
  {
    timestamps: true, // This option will add "createdAt" and "updatedAt" fields
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
