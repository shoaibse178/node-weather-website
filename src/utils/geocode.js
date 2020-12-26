const request = require('request');

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2hvYWliNyIsImEiOiJja2l3cjJnc3IzbHVxMnZxajZtaTBnZDE4In0.kWtO17-Uum7m_QpKX_ypKg&limit=1'
    
    request({url, json:true}, (error,{body}) =>{
      if(error){
        callback('Unable to connect location services!',undefined)
      } else if (body.features.length === 0){
        callback('not found result for this. Please try for another',undefined)
      } else{
        callback(undefined, {
          latitude:body.features[0].center[1],
          longitude:body.features[0].center[0],
          location:body.features[0].place_name,
        })
      }

    })
}

module.exports = geocode;