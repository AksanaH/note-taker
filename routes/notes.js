const noteRouter = require('express').Router();

const { createNewNote} = require('../db/notes');

let { notesArray } = require('../db/db.json');

noteRouter.get('/notes', (req, res) => {
  let receivedNotes = notesArray;
  res.json(receivedNotes);
});

  noteRouter.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    if(notesArray){
    req.body.id = notesArray.length.toString();
    } else 
    {req.body.id = 0}
    res.json(createNewNote(req.body, notesArray));
  });

  module.exports = { noteRouter };