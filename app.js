const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('London', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

    // Callback chaining pattern
    forecast(data.latitude, data.longitude, (error, data) => {
        console.log('Error', error)
        console.log('Data', data)
    })
})

