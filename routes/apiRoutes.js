const path = require('path');
const router = require('express').Router();
const fs = require('fs');

// gets the notes that are saved
router.get('/notes', (req, res) => {
    res.send(JSON.parse(fs.readFileSync('./db/db.json')));
})

// posts to SAVE the note
router.post('/notes', (req, res) => {
    // var prevNotes = JSON.parse(fs.readFile('./db/db.json'))
    // prevNotes.push(JSON.parse(req.body))
})

// // deletes the note
// require.delete('/notes', (req, res) => {

// })

module.exports = router;