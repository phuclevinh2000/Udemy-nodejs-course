const chalk = require('chalk');
const { describe } = require('yargs');
const yargs = require('yargs')
const getNotes = require('./notes');

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,    //make the title is required
      type: 'string'         //make the title is a string
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('Title: ' + argv.title)
    console.log('Body: ' + argv.body)
  }
})

// Create remove command 
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note')
  }
})

// Create list command 
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: function() {
    console.log('Listing out all the note')
  }
})

// Create read command 
yargs.command({
  command: 'read',
  describe: 'Read note',
  handler: function() {
    console.log('Reading the note')
  }
})

// add, remove, read, list

yargs.parse()
// console.log(yargs.argv)


