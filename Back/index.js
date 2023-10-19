import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import router from "./routes/booksRoute.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) =>
  res
    .status(295)
    .send("Welcome!! Its working at last! (ﾉ｡･ω･)ﾉCongratulationsヽ(･ω･｡ヽ)")
);

app.use('/books',router);
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database!");
    app.listen(PORT, () => {
      console.log(`Listening to Port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("*",(req,res) => res.status(404).json({error:"Not Found! Go Away!"}))
export default app;
