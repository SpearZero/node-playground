const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=발급받은키&query=" + latitude + "," + longitude + "&units=f";

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const current = body.current;
            callback(undefined,
                `${current.weather_descriptions[0]}, temperature ${current.temperature}, feelslike ${current.feelslike}`
            )
        }
    });
}

module.exports = forecast