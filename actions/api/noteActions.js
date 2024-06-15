const Note = require('../../db/models/note.js')

class NoteAction {
    saveNotes(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        const newNote = new Note({
            title: title,
            body: body
        });
        newNote.save().then(() => console.log('Zapisano nową notatkę'));
        res.send('ok');
    }

    getAllNotes(req, res) {
        res.send('Pobieranie wszystkich notatek')
    }

    getNote(req, res) {
        res.send('Pobieranie jedne notatki, notatka ma numer: ' + req.params.id)
    }

    updateNote(req, res) {
        res.send('Uaktualnienie notatki numer: ' + req.params.id)
    }

    deleteNote(req, res) {
        res.send('Usuwanie notatki numer: ' + req.params.id)
    }


}

module.exports = new NoteAction()