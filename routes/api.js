const express = require('express');
const noteActions = require('../actions/api/noteActions.js')
const router = express.Router();

router.get('/allNotes', noteActions.getAllNotes);
router.get('/notes/:id', noteActions.getNote);
router.post('/save', noteActions.saveNotes);
router.put('/notes/:id', noteActions.updateNote);
router.delete('/notes/:id', noteActions.deleteNote);

module.exports = router;