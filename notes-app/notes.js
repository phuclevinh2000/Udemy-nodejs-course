const chalk = require('chalk')
const fs = require('fs');

// Function to add some note
const addNote =  (title, body) => {
  const notes = loadNotes();        //load notes from notes.json, if that file does not exist yet, then return empty array
  const duplicateNote = notes.find((note) => note.title === title)

  if(!duplicateNote) {   //if does not find any dup
    notes.push({                      //push new note
      title: title,
      body: body,
    });
  
    saveNotes(notes)  
    console.log(chalk.green.inverse("New note added!"))
  } else {
    console.log(chalk.red.inverse("Note title taken!"))
  }
};

// Function to delete some note
const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  
  if(notes.length > notesToKeep.length) {   //check if has delete something
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse("Note removed!"))
  } else {
    console.log(chalk.red.inverse("No note found!"))
  }
}

// Function to list all the note
const listNote = () => {
  const notes = loadNotes()

  console.log(chalk.yellowBright.inverse("Your notes: "))
  notes.forEach(note => {
    console.log(note.title)
  });
}

// Function to read a specific note 
const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
  
  if(note) {
    console.log(chalk.greenBright.inverse(`Title: ${note.title}`))
    console.log(chalk.yellowBright.inverse(`Body: ${note.body}`))
  } else {
    console.log(chalk.redBright.inverse("No note found"))
  }
}

const saveNotes = (notes) => {  //save note to json file
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote
};
