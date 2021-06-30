require('dotenv').config();

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const userInput = process.argv[2] // Prompt customer for address

geocode(userInput, (error, { latitude, longitude, placeName } = {}) => {
    // If the user doesn't provide an address don't run everything else below and give the user a message
    if (!userInput) {
        return console.log('Please provide an address!')
    }
    
    if (error) {
        return console.log(error)
    }

    // Callback chaining pattern
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(placeName)
        console.log(forecastData)
    })
})



