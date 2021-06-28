require('dotenv').config();

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('London', (error, data) => {
    if (error) {
        return console.log(error)
    }

    // Callback chaining pattern
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(data.placeName)
        console.log(forecastData)
    })
})



