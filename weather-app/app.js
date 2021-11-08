const request = require('request')
const geocode = require('./utils/geocode')    //return the lat and long of a location
const forecast = require('./utils/forecast')  //return the weather data of a location using lat and long

const address = process.argv[2] //the the input argv

if(!address) {
  console.log('Please provide an address')
} else {
  geocode(address, (error, data) => {
    if(error) {
      return console.log(error)
    } 
    
    forecast(data.latitude, data.longtitude, (error, forecastData) => {
      if(error) {
        return console.log(error)
      }
      console.log(data.location)
      console.log(forecastData)
    })
  })
}


