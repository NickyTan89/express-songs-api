const app = require("../app");
const request = require("supertest");

describe("routes/songs", () => {
  it("POST /songs should return a new song object", () => {
<<<<<<< HEAD
    const requestBody = {name: "test song", artist: "rhianna"};
    const responseBody = {id: 1, name: "test song", artist: "rhianna"};
    return request(app)
    .post("/songs")
    .send(requestBody)
    
=======
    const requestBody = { name: "Numb", artist: "Linkin Park" };
    const responseBody = { id: 1, name: "Numb", artist: "Linkin Park" };

    return request(app)
    .post("/songs")
    .send(requestBody)

>>>>>>> 1d5c04f835b772536a1d9a02ea993c09c94bebbe
    .then(response => {
      expect(response.status).toEqual(201);
      expect(response.body).toEqual(responseBody)
    });
  });
  
<<<<<<< HEAD
  it("GET /songs should return an array containing one song", () => {
    return request(app)
    .get("/songs")
    
    .then(response => {
      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toEqual(true);
      expect(response.body.length).toEqual(1);
    });
  });
  
  it("GET /songs/:id should return the song with id", () => {
    const responseBody = {id: 1, name: "test song", artist: "rhianna"};
    
    return request(app)
    .get("/songs/1")
    
    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toMatchObject(responseBody);
    });
  });
    
  it("PUT /songs should return the updated song", () => {
    const requestBody = {name: "updated song", artist: "rhianna"};
    const responseBody = {id: 1, name: "updated song", artist: "rhianna"};
    
    return request(app)
    .put("/songs/1")
    .send(requestBody)
    
    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody);
=======
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
>>>>>>> 1d5c04f835b772536a1d9a02ea993c09c94bebbe
    });
  });

  it("DELETE /songs/:id should return the deleted song", () => {
<<<<<<< HEAD
    responseBody = { id: 1, name: "updated song", artist: "rhianna" };

    return request(app)
    .delete("/songs/1")

    .then(response => {
      expect(response.status).toEqual(200);
      expect(response.body).toEqual(responseBody);
    })
  });
  
  it("GET /songs should return an empty array", () => {
    return request(app)
    .get("/songs")
    
    .then(response => {
      expect(response.status).toEqual(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toEqual(0);
=======
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
>>>>>>> 1d5c04f835b772536a1d9a02ea993c09c94bebbe
    });
  });

});
