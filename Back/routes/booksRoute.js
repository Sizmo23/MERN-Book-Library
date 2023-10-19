import express from "express";
import Book from "../models/bookModel.js";

const router = express.Router();

//inserting a book into the database
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "SEND ALL REQUIRED FIELDS! AUTHOR, TITLE AND DATE!" });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//retrieving all books and the total count from the database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(211).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//retrieving a book by ID from the database
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found!" });
    }
    return res.status(203).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

//updating the book via given ID
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res
        .status(400)
        .send({ message: "SEND ALL REQUIRED FIELDS! AUTHOR, TITLE AND DATE!" });
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found!" });
    }
    const new_book = await Book.findById(id);
    return res.status(200).json({
      message: "Book Successfully Updated!",
      data: new_book,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

//deleting a book using an ID from a database
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(400).json({ message: "Book not found!" });
    }
    const title = book.title;
    await Book.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: `Book ${title} has successfully been deleted!` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;