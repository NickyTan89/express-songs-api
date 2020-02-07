const app = require("../app");
const request = require("supertest");

describe("routes/books", () => {
  
  it("POST /books should return a new book object", () => {
    const requestBody = { title: "ABC", author: "DEF" };
    const responseBody = { id: 1, title: "ABC", author: "DEF" };

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
      { id:1, title: "ABC", author: "DEF" }
    ];

    return request(app)
    .get("/books")

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("GET /books/:id should return book with id specified", () => {
    const responseBody = { id: 1, title: "ABC", author: "DEF" }

    return request(app)
    .get('/books/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("GET /books/:id should return a 404(Not Found) error if book does not exist", () => {
    return request(app)
    .get("/books/20")

    .then(response => {
      expect(response.status).toEqual(404);
      expect(response.body).toEqual({Error:"Could not find book with ID: 20"})
    })
  });
  
  it("PUT /books/:id should return the updated book", () => {
    const requestBody = { title: "GHI", author: "JKL" }
    const responseBody = { id: 1, title: "GHI", author: "JKL" }

    return request(app)
    .put('/books/1')
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("PUT /books/:id should return a 404(Not Found) if book does not exist", () => {
    const requestBody = { 
      id: 20,
      title: "Billion Dollar Whale",
      author: "Tom Wright"
    }

    return request(app)
    .put('/books/24')
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(404);
      expect(response.body).toEqual({"Error":"Could not find book with ID: 24"})
    });
  });

  it("DELETE /books/:id should return the deleted book", () => {
    const responseBody = { id: 1, title: "GHI", author: "JKL" }

    return request(app)
    .delete('/books/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("DELETE /songs/:id should return 404(Not Found) if the book does not exist", () => {
    return request(app)
    .delete('/books/26')

    .then(response => {
      expect(response.status).toEqual(404);
      expect(response.body).toEqual({"Error":"Could not find book with ID: 26"})
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
