const Note = require('../../db/models/note.js')

class NoteAction {

    async saveNote(req, res) {
        const title = req.body.title;
        const body = req.body.body;
        const newNote = new Note({
            title: title,
            body: body
        });
        try {
            await newNote.save();
            console.log('Zapisano nową notatkę')
            res.send('ok')
        }
        catch (err) {
            console.error('Błąd: ', err)
        }

    }

    async getAllNotes(req, res) {
        try {
            const doc = await Note.find();
            res.status(200).json(doc);
        }
        catch (err) {
            console.error('Błąd podczas pobierania notatek:', err);
            res.status(500).json({ 'message': 'Wystąpił błąd podczas pobierania notatek: ', err });
        }
    }

    async getNote(req, res) {
        const id = req.params.id
        try {
            const doc = await Note.findOne({ "_id": id })
            res.status(200).json(doc)
        }
        catch (err) {
            console.error('Błąd podczas pobierania notatek:', err);
            res.status(500).json({ 'message': 'Wystąpił błąd podczas pobierania notatek: ', err });
        }


        res.send('Pobieranie jedne notatki, notatka ma numer: ' + id)
    }

    updateNote(req, res) {
        res.send('Uaktualnienie notatki numer: ' + req.params.id)
    }

    deleteNote(req, res) {
        res.send('Usuwanie notatki numer: ' + req.params.id)
    }


}

module.exports = new NoteAction()