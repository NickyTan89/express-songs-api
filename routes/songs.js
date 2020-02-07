const express = require('express');
const router = express.Router();
//express router

let songs = [
//   { id: 1, name: "Numb", artist: "Linkin Park" },
  // { id: 2, name: "Rather Be", artist: "Clean Bandit" }
];

//integrate middleware
router.param('id', (req, res, next, id) => {
  let song = songs.find(song => song.id === parseInt(req.params.id));
  if (!song) {
    const error = new Error("Impossible. Perhaps the archives are incomplete.")
    return next(error);
  };
    req.song = song;
    next();
});

//return list of all songs
router.get('/', (req, res) => {
  res.status(200).json(songs) //200 = okay
});

//return a song with id 
router.get('/:id', (req, res) => {
  // let findSong = songs.find(song => song.id == parseInt(req.params.id));
  res.status(200).json(req.song)
});

//create a new song, and return new song
router.post('/', (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist
  };
  if (!newSong) {
    const error = new Error('Unable to post the new song to the archives. Please try again.')
    return next(error)
  }
  songs.push(newSong)
  res.status(201).json(newSong) //201 = created
});

//edit a song with id, and return edited song
router.put('/:id', (req, res) => {
  // let editSong = songs.find(song => song.id === parseInt(req.params.id));
  // editSong.name = req.body.name;
  // editSong.artist = req.body.artist;
  req.song.name = req.body.name;
  req.song.artist = req.body.artist;
  res.status(200).json(req.song)
});

//delete a song with id, and return deleted song
router.delete('/:id', (req, res) => {
  // let deleteSong = songs.find(song => song.id === parseInt(req.params.id));
  let deleteSong = req.song
  let index = songs.indexOf(deleteSong);
  songs.splice(index, 1)
  res.status(200).json(deleteSong)
});

//create placeholder error
router.use((err, req, res, next) => {
  res.status(404).send(err.message);
});

module.exports = router;