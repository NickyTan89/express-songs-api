const express = require('express');
const router = express.Router();
//express router

let books = [
  // { id: 1, title: "some book 1", writer: "some writer 1" },
  // { id: 2, title: "some book 2", writer: "some writer 2" }
];

//integrate middleware
router.param('id', (req, res, next, id) => {
  let book = books.find(book => book.id === parseInt(req.params.id));
  req.book = book;
  next();
});

//return list of all books
router.get('/', (req, res) => {
  res.status(200).json(books) //200 = okay
});

//create a new book, and return new book
router.post('/', (req, res) => {
  let newBook = {
    id: books.length + 1,
    title: req.body.title,
    writer: req.body.writer
  };
  books.push(newBook)
  res.status(201).json(newBook) //201 = created
});

//return a book with id 
router.get('/:id', (req, res) => {
  let findBook = books.find(book => book.id == parseInt(req.params.id));
  res.status(200).json(findBook)
});

//edit a book with id, and return edited book
router.put('/:id', (req, res) => {
  let editBook = books.find(book => book.id === parseInt(req.params.id));
  editBook.title = req.body.title
  editBook.writer = req.body.writer
  res.status(200).json(editBook)
})

//delete a book with id, and return deleted book
router.delete('/:id', (req, res) => {
  let deleteBook = books.find(book => book.id === parseInt(req.params.id));
  let index = books.indexOf(deleteBook);
  books.splice(index, 1)
  res.status(200).json(deleteBook)
})

module.exports = router;