// const square = function(x) {
//   return x*x
// }

// const square = (x) => {
//   return x*x
// }

// const square = (x) => x*x

// console.log(square(3))

const event = {
  name: 'Birthday Event',
  guestList: ['Bo', 'Bow'],
  printGuessList() {
    console.log("Guest list for " + this.name)

    this.guestList.forEach((guess) => {
      console.log(guess + " "+  this.name)
    })
  }
}

event.printGuessList()