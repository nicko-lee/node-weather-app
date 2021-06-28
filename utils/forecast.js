const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    // Build request URL
    const url = 'http://api.weatherstack.com/current?access_key=bca21064aedc7982b944fc40d5696b07&query=' + latitude + ',' + longitude
    
    // Make request
    request( { url: url, json: true }, (error, response, body) => {
        if (error) { // Check if error argument contains a value (indicates a lower level OS error) 
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) { // If this prop exists we know something has gone wrong 
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, `${response.body.current.weather_descriptions[0]}: It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
        }
    }) 
}

module.exports = forecast


