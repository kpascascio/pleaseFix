const router = require('express').Router();
const sequelize = require('../db');
const SongList = sequelize.import('../models/songlist');

router.post('/songs', (req, res) => {
    SongList.create({
        artist: req.body.artist, 
        songTitle: req.body.song
    }).then((songfromDB) => {
        res.send(songfromDB);
    })
})

router.get('/songs', (req, res) => {
    SongList.findAll().then((songfromDB) => {
        res.send(songfromDB);
    })
})

module.exports = router;