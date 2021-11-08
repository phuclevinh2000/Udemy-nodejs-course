const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoicGh1Y2xldmluaDIwMDAiLCJhIjoiY2t2b2t3ZWttMTJhbzJxcWZ2a29xcnZ6ZiJ9.CEhpB6cQXZs7kPhw0CvbWg&limit=1`

  request({url: url, json: true}, (error, response ) => {
    if(error) {
      callback('Unable to connect to geocoding', undefined)
    } else if(response.body.features.length === 0) {
      callback('Location not found', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode