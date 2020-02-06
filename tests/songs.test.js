const app = require("../app");
const request = require("supertest");

//Fill in the test case below for the Songs API

describe("routes/songs", () => {
  it("POST /songs should return a new song object", () => {
    const requestBody = { name: "Numb", artist: "Linkin Park" };
    const responseBody = { id: 1, name: "Numb", artist: "Linkin Park" };

    return request(app)
    .post("/songs")
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(201);
      expect(response.body).toEqual(responseBody)
    });
  });
  
  it("GET /songs should return an array with a song", () => {
    const responseBody = [
      { id:1, name: "Numb", artist: "Linkin Park" }
    ];

    return request(app)
    .get("/songs")

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("GET /songs/:id should return song with id specified", () => {
    const responseBody = { id: 1, name: "Numb", artist: "Linkin Park" }

    return request(app)
    .get('/songs/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });
  
  it("PUT /songs/:id should return the updated song", () => {
    const requestBody = { name: "Dance Monkey", artist: "Tones And I" }
    const responseBody = { id: 1, name: "Dance Monkey", artist: "Tones And I" }

    return request(app)
    .put('/songs/1')
    .send(requestBody)

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

  it("DELETE /songs/:id should return the deleted song", () => {
    const responseBody = { id: 1, name: "Dance Monkey", artist: "Tones And I" }

    return request(app)
    .delete('/songs/1')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });
  
  it("GET /songs should return an empty array", () => {
    const responseBody = []
    
    return request(app)
    .get('/songs')

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody)
    });
  });

});

