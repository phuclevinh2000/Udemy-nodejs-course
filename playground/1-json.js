const fs = require('fs')    //to save all data to file system
// const book = {
//   title:"Ego is the enenmy",
//   author: "Phuc"
// }


// const bookJSON = JSON.stringify(book)   //convert to string

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json') //read file
const dataJSON = dataBuffer.toString()  //convert data buffer to string



