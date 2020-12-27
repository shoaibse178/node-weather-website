const request = require('request');


const forecast = (latitude,longitude, callback) =>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude + '&lon='+longitude +'&appid=9d6923884b82ddbe4673bed998c2700a'

    request({url, json:true}, (error, {body}) =>{
         if(error) {
             callback('unable to get locaton',undefined)
         } else if(body.message) {
             callback('unable to result for this location. try for another',undefined)
         } else{
             callback(undefined, 'Weather main condition is '+ body.weather[0].main +'.'+' There is min tempreture is ' + body.main.temp_min +' and high tempreture '+body.main.temp_max +'.'+' Pressure is ' + body.main.pressure +' and the wind speed is ' + body.wind.speed+'.')
         }
    })
}

module.exports = forecast;