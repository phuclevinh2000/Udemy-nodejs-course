const request = require("request")

const forecast = (latitude,longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e20b6e3cdc4dfac7786b452bf0b08c04&query=${latitude},${longtitude}`

  request({url: url, json: true}, (error, response) => {
    if(error) {
      callback('Unable to connect to weatherstack', undefined)
    } else if(response.body.error) {
      callback('Location not found', undefined)
    } else {
      callback(undefined, response.body.current.weather_descriptions[0]+ '. It is currently ' + response.body.current.temperature + " degress out, It feels like " + response.body.current.feelslike)
    }
  })
}

module.exports = forecast