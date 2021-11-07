const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e20b6e3cdc4dfac7786b452bf0b08c04&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) =>{   //using request in npm
  console.log(response.body.current.weather_descriptions[0]+ 'It is currently ' + response.body.current.temperature + " degress out, It feels like " + response.body.current.feelslike)
})

//Geocoding
//Address -> Lat/Long ->weather