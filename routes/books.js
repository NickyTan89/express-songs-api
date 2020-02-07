const express = require('express');
const router = express.Router();
//express router

let books = [
  // { id: 1, title: "some book 1", author: "some writer 1" },
  // { id: 2, title: "some book 2", author: "some writer 2" }
];

//integrate middleware
router.param('id', (req, res, next, id) => {
  let book = books.find(book => book.id === parseInt(req.params.id));
  if (!book) {
    const error = new Error(`Could not find book with ID: ${id}`)
    return next(error);
  };
    req.book = book;
    next();
});

//return list of all books
router.get('/', (req, res) => {
  res.status(200).json(books) //200 = okay
});

//return a book with id 
router.get('/:id', (req, res) => {
  // let findBook = books.find(book => book.id == parseInt(req.params.id));
  res.status(200).json(req.book)
});

//create a new book, and return new book
router.post('/', (req, res) => {
  let newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  if (!newBook) {
    const error = new Error("Unable to post the new book to the archives. Please try again.")
    return next(error)
  }
  books.push(newBook)
  res.status(201).json(newBook) //201 = created
});

//edit a book with id, and return edited book
router.put('/:id', (req, res) => {
  // let editBook = books.find(book => book.id === parseInt(req.params.id));
  // editBook.title = req.body.title
  // editBook.writer = req.body.writer
  req.book.title = req.body.title
  req.book.author = req.body.author
  res.status(200).json(req.book)
});

//delete a book with id, and return deleted book
router.delete('/:id', (req, res) => {
  // let deleteBook = books.find(book => book.id === parseInt(req.params.id));
  let deleteBook = req.book
  let index = books.indexOf(deleteBook);
  books.splice(index, 1)
  res.status(200).json(deleteBook)
});

//create placeholder error 404
router.use((err, req, res, next) => {
  res.status(404).send({Error: err.message});
});

module.exports = router;