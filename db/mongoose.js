const mongoose = require('mongoose');
//const Note = require('./models/note.js')
const { database } = require('../config.js')
mongoose.connect(database);

// const newNote = new Note({
//     title: "Tytuł testowy",
//     body: "To jest treścnazej notatki"
// });

// newNote.save().then(() => { console.log('Notatka zapisana') })