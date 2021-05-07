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

const chalk = require('chalk')

const greenMsg = chalk.green('Success!')
console.log(greenMsg)
const boldMsg = chalk.bold.red('Error!')
console.log(boldMsg)
const bgMsg = chalk.underline.bgBlue('Hello!')
console.log(bgMsg)
const inverseMsg = chalk.inverse.blue('Hello!')
console.log(inverseMsg)

//Global npm modules and nodemon