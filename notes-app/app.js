const chalk = require('chalk');
const yargs = require('yargs')  //to pass arguments
const getNotes = require('./notes');

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
  handler: function(argv) {
    console.log('Title: ' + argv.title)
    console.log("Body: " + argv.body)
  }
})

// Create remove command
yargs.command({
  command:'remove',
  describle: 'Remove a note',
  handler: function() {
    console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command:'list',
  describle: 'List the note',
  handler: function() {
    console.log('Listing out all the note')
  }
})

// Create read command
yargs.command({
  command:'read',
  describle: 'Read the note',
  handler: function() {
    console.log('Reading a note')
  }
})

// add, remove, read, list

yargs.parse() //similar to console.log(yargs.argv)
// console.log(yargs.argv)


