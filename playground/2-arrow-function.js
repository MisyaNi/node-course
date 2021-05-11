// const square = function (x) {
//   return x * x
// }

// const { listenerCount } = require("node:events")

//ES6
// const square = x => x * x

// console.log(square(2))

const event = {
  name: 'Birthday Party',
  guestList: ['Misya', 'Nurul'],
  printGuestList() {
    const that = this
    console.log('Guest list for ' + this.name)

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + that.name)
    })
  }
}

event.printGuestList()