const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');


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
    // const prevNotes = prevNotes.push(JSON.parse(req.body));
    // currentNotes = JSON.parse(JSON.stringify(currentNotes));
    fs.writeFile('./db/db.json', JSON.stringify(currentNotes), (err) => {
        console.log(err);
    });
    // prevNotes.push(JSON.parse(JSON.stringify(req.body)));
    // JSON.parse(JSON.stringify(prevNotes));
    // fs.writeFileSync('./db/db.json', `${prevNotes}`);
});

// // deletes the note
// require.delete('/notes', (req, res) => {

// })

module.exports = router;