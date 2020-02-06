const express = require('express');
const app = express();

app.use(express.json())

let songs = [
  // { id: 1, name: "Numb", artist: "Linkin Park" },
  // { id: 2, name: "Rather Be", artist: "Clean Bandit" }
];

//return list of all songs
app.get('/songs', (req, res) => {
  res.status(200).json(songs)
});

//create a new song, and return new song
app.post('/songs', (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist
  };
  songs.push(newSong)
  res.status(201).json(newSong)
});

//return a song with id 
app.get('/songs/:id', (req, res) => {
  let findSong = songs.find(song => song.id == parseInt(req.params.id));
  res.status(200).json(findSong)
});

//edit a song with id, and return edited song
app.put('/songs/:id', (req, res) => {
  let editSong = songs.find(song => song.id === parseInt(req.params.id));
  editSong.name = req.body.name
  editSong.artist = req.body.artist
  res.status(200).json(editSong)
})

//delete a song with id, and return deleted song
app.delete('/songs/:id', (req, res) => {
  let deleteSong = songs.find(song => song.id === parseInt(req.params.id));
  let index = songs.indexOf(deleteSong);
  songs.splice(index, 1)
  res.status(200).json(deleteSong)
})

module.exports = app
