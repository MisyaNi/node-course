//section 3

//Importing Node.js Core Modules

//to run fs - type cls

// const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Misya.')

//challenge: append message to notes.txt

// fs.appendFileSync('notes.txt', ' I`m 28 y/o')

//Importing your own files

//import string
// const firstName = require('./utils.js')
// console.log(firstName)

//import function
// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

//challenge

// const notes = require('./notes.js')
// const msg = notes()
// console.log(msg)

//Import npm modules

//npm init - create package.json
//npm install validator@13.6.0 - create node_modules and package-lock.json

// const validator = require('validator')

// console.log(validator.isEmail('misya@test.com')) //return true
// console.log(validator.isEmail('misyatest.com')) //return false
// console.log(validator.isURL('google.com')) //return false
// console.log(validator.isURL('misyatest.com')) //return false

//Printing in color

//challenge

// const chalk = require('chalk')

// const greenMsg = chalk.green('Success!')
// console.log(greenMsg)
// const boldMsg = chalk.bold.red('Error!')
// console.log(boldMsg)
// const bgMsg = chalk.underline.bgBlue('Hello!')
// console.log(bgMsg)
// const inverseMsg = chalk.inverse.blue('Hello!')
// console.log(inverseMsg)

//Global npm modules and nodemon

//install npm i nodemon@2.0.7 -g

// const nodemonMsg = chalk.blue.inverse.bold('Test!')
// console.log(nodemonMsg)

//section 4

//1. getting input from user
// const command = process.argv[2]
// console.log(process.argv)

// if (command === 'add') {
//   console.log('Adding note!')
// } else if (command === 'remove') {
//   console.log('Removing note!')
// }

//run node app.js add 

//2. argument passing with yargs
//pass into obj
// const yargs = require('yargs')
// // console.log(process.argv)

// //customize yargs version
// yargs.version('1.1.0')


// //create add command

// yargs.command({
//   command: 'add',
//   describe: 'Add new note',
//   builder: {
//     title: {
//       describe: 'Note title',
//       demandOption: true,
//       type: 'string'
//     },
//     body: {
//       describe: 'Note Description',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: function (argv) {
//     console.log('Title: ' + argv.title)
//     console.log('Body: ' + argv.body)
//   }

// })

// //create remove command

// yargs.command({
//   command: 'remove',
//   describe: 'Remove a note',
//   handler: function () {
//     console.log('Removing the note...')
//   }

// })

// //create list command

// yargs.command({
//   command: 'list',
//   describe: 'List of notes',
//   handler: function () {
//     console.log('Listing out all notes...')
//   }

// })

// //create read command

// yargs.command({
//   command: 'read',
//   describe: 'Reading a note',
//   handler: function () {
//     console.log('Reading a note..')
//   }

// })

// yargs.parse()

// console.log(yargs.argv)

//Adding a note

const { addNote } = require('./notes.js')
const notes = require('./notes.js')
const yargs = require('yargs')
const chalk = require('chalk')

yargs.command({
  command: 'add',
  describe: 'Add new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Description',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    addNote(argv.title, argv.body)
  }

})

//run node app.js add  --title="List" --body="Books" 

//removing notes
//challenge

yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
  }

})
//run node app.js remove  --title="t" 

yargs.parse()
