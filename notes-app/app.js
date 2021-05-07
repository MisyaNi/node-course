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

const notes = require('./notes.js')
const msg = notes()
console.log(msg)