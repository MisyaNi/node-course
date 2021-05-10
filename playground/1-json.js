//3. storing data with json
const fs = require('fs')
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
//write new file
// fs.writeFileSync('1-json.json', bookJSON)
//read file
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//get specific obj
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

//challenge
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
// console.log(user.name)

user.name = 'Misya'
user.age = 28

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)