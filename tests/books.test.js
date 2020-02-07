const app = require("../app");
const request = require("supertest");

describe("routes/books", () => {
  
  it("POST /books should return a new book object", () => {
    const requestBody = { title: "ABC", writer: "DEF" };
    const responseBody = { id: 1, title: "ABC", writer: "DEF" };

    return request(app)
    .post("/books")
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(201);
      expect(response.body).toEqual(responseBody)
    });
  });
  
  it("GET /books should return an array with a book", () => {
    const responseBody = [
      { id:1, title: "ABC", writer: "DEF" }
    ];

    return request(app)
    .get("/books")

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("GET /books/:id should return book with id specified", () => {
    const responseBody = { id: 1, title: "ABC", writer: "DEF" }

    return request(app)
    .get('/books/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });
  
  it("PUT /books/:id should return the updated book", () => {
    const requestBody = { title: "GHI", writer: "JKL" }
    const responseBody = { id: 1, title: "GHI", writer: "JKL" }

    return request(app)
    .put('/books/1')
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("DELETE /books/:id should return the deleted book", () => {
    const responseBody = { id: 1, title: "GHI", writer: "JKL" }

    return request(app)
    .delete('/books/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });
  
  it("GET /books should return an empty array", () => {
    const responseBody = []
    
    return request(app)
    .get('/books')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  }); 

});
