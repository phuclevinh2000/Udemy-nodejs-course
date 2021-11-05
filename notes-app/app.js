const chalk = require('chalk');
const yargs = require('yargs');  //to pass arguments
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {    //adding object to the command
    title: {
      describe: 'Note title',
      demandOption: true,  //making the argv compulsory
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)  //pass the title and the body to the addNote function
  }
})

// Create remove command
yargs.command({
  command:'remove',
  describle: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title', 
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command:'list',
  describle: 'List the note',
  handler() {
    notes.listNote()
  }
})

// Create read command
yargs.command({
  command:'read',
  describle: 'Read the note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    // console.log("reading")
    notes.readNote(argv.title)
  }
})

// add, remove, read, list

yargs.parse() //similar to console.log(yargs.argv)
// console.log(yargs.argv)


