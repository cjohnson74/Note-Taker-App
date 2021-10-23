const path = require('path');
const router = require('express').Router();
const fs = require('fs');

// gets the notes that are saved
router.get('/notes', (req, res) => {
    res.send(fs.readFileSync('./db/db.json', 'utf8'));
})

// posts to SAVE the note
router.post('/notes', (req, res) => {
    const prevNotes = fs.readFileSync('./db/db.json', 'utf8');
    const currentNotes = JSON.parse(prevNotes);
    currentNotes.push(req.body);
    // const prevNotes = prevNotes.push(JSON.parse(req.body));
    // currentNotes = JSON.parse(JSON.stringify(currentNotes));
    fs.writeFileSync('./db/db.json', JSON.stringify(currentNotes));
    // prevNotes.push(JSON.parse(JSON.stringify(req.body)));
    // JSON.parse(JSON.stringify(prevNotes));
    // fs.writeFileSync('./db/db.json', `${prevNotes}`);
});

// // deletes the note
// require.delete('/notes', (req, res) => {

// })

module.exports = router;