const http = require('http')
const url = `http://api.weatherstack.com/current?access_key=e20b6e3cdc4dfac7786b452bf0b08c04&query=100,200`

http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {

  })

  response.on('end', () => {

  })
})