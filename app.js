const express = require('express');
const app = express();
<<<<<<< HEAD

app.use(express.json())

let songs = [];
=======
const PORT = 3000

app.use(express.json())

let songs = [
  { id: 1, name: "Some Song", artist: "Some Artist" },
  { id: 2, name: "Rather Be", artist: "Clean Bandit" }
];
>>>>>>> 577f82b002854cfd9764b806104d7961d59ef93b

//Songs API
//return list of all songs
app.get('/songs', (req, res) => {
<<<<<<< HEAD
  res.status(200).json(songs);
=======
  res.status(200).json(songs)
>>>>>>> 577f82b002854cfd9764b806104d7961d59ef93b
});

//create a new song, and return new song
app.post('/songs', (req, res) => {
  let newSong = {
    id: songs.length + 1,
<<<<<<< HEAD
    name: req.body.name,
    artist: req.body.artist 
  }
  songs.push(newSong);
  res.status(201).json(newSong);
=======
    song: req.body.name,
    artist: req.body.artist
  };
  songs.push(newSong)
  res.status(200).json(newSong)
>>>>>>> 577f82b002854cfd9764b806104d7961d59ef93b
});

//return a song with id 
app.get('/songs/:id', (req, res) => {
<<<<<<< HEAD
  let song = songs.find(song => song.id == parseInt(req.params.id));
  res.status(200).json(song);
=======
  let findSong = songs.find(song => song.id == parseInt(req.params.id));
  res.status(200).json(findSong)
>>>>>>> 577f82b002854cfd9764b806104d7961d59ef93b
});

//edit a song with id, and return edited song
app.put('/songs/:id', (req, res) => {
<<<<<<< HEAD
  let song = songs.find(song => song.id === parseInt(req.params.id));
  song.name = req.body.name;
  song.artist = req.body.artist;
  res.status(200).json(song);
});

//delete a song with id, and return deleted song
app.delete("/songs/:id", (req, res) => {
  let songToDelete = songs.find(song => song.id === parseInt(req.params.id));
  let index = songs.indexOf(songToDelete);
  songs.splice(index, 1);
  res.status(200).json(songToDelete);
});

module.exports = app
=======
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

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
>>>>>>> 577f82b002854cfd9764b806104d7961d59ef93b
