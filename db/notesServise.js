const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

function deleteNote(id, notes){
  console.log(typeof id);
  let notesArray = [];
  for (const element of notes){
    if (element.id !== id) {
      notesArray.push(element);
    }
  }
  
 console.log(notesArray);
   
   fs.writeFileSync(
     path.join(__dirname, '../db/db.json'),
     JSON.stringify({ notesArray }, null, 2)
   );
   return notesArray;
}

module.exports = {createNewNote, deleteNote}

