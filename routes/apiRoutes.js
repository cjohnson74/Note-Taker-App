const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');
const { query } = require('express');


// gets the notes that are saved
router.get('/notes', (req, res) => {
    res.send(JSON.parse(JSON.stringify(fs.readFileSync('./db/db.json', 'utf8'))));
})

// posts to SAVE the note
router.post('/notes', (req, res) => {
    const prevNotes = fs.readFileSync('./db/db.json', 'utf8');
    const currentNotes = JSON.parse(prevNotes);
    var newNote = JSON.parse(JSON.stringify(req.body));
    newNote.id = generateUniqueId({
        length: 4,
        useLetters: false
      });
    JSON.stringify(newNote)
    currentNotes.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (err) => {
        console.log(err);
    });
    res.send(JSON.stringify(body.req));
});

// // deletes the note
// router.delete(`/notes/${id}`, (req, res) => {
//     const prevNotes = fs.readFileSync('./db/db.json', 'utf8');
//     const currentNotes = JSON.parse(prevNotes);
//     currentNotes[this.id - 1];
// })

module.exports = router;