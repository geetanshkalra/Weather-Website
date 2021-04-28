const request = require('request')

const forecast = (lantitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=99fad31178f4f6e459d6d6df0dbfc4db&query=' + longitude + ',' + lantitude + '&units=f'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast