const request = require("request")

const forecast = (latitude,longtitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e20b6e3cdc4dfac7786b452bf0b08c04&query=${latitude},${longtitude}`

  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to weatherstack', undefined)
    } else if(body.error) {
      callback('Location not found', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0]+ '. It is currently ' + body.current.temperature + " degress out, It feels like " + body.current.feelslike)
    }
  })
}

module.exports = forecast