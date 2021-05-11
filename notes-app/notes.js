const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Your notes ....'

const addNote = (title, body) => {
  const notes = loadNotes()
  // const duplicateNotes = notes.filter((note) => note.title === title)
  //return false - filter will not keep duplicate array
  const duplicateNote = notes.find((note) => note.title === title)

  // if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse("New note added!"))
  } else {
    console.log(chalk.red.inverse("Note title taken!"))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {

    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

  } catch (e) {
    return []
  }

}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) =>
    note.title !== title
  )

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }

}

const listNotes = (title) => {
  const notes = loadNotes()
  console.log(chalk.yellow.inverse('Your Notes'))
  const noteList = notes.forEach((note) => console.log(chalk.white.inverse(note.title)))
}

const readNote = (title, body) => {
  const notes = loadNotes()
  // console.log(chalk.yellow.inverse('Your Notes'))
  const noteToRead = notes.find((note) => note.title === title)

  if (noteToRead) {
    console.log(chalk.blue.inverse(noteToRead.title) + ': ' + chalk.white.inverse(noteToRead.body))
  } else {
    console.log(chalk.red.inverse('Note not found.'))
  }


}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}



