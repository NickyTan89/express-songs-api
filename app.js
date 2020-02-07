const express = require('express');
const app = express();

const songsRouter = require("./routes/songs");
const booksRouter = require("./routes/books");

app.use(express.json())

//Building Route
app.use("/songs", songsRouter)
app.use("/books", booksRouter)

module.exports = app