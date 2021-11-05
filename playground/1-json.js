const fs = require('fs')    //to save all data to file system

const dataBuffer = fs.readFileSync('1-json.json') //read file
const dataJSON = dataBuffer.toString()  //convert data buffer to string
const user = JSON.parse(dataJSON)       //convert data from string to object

user.name = 'Phuc'
user.age = 54

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)



