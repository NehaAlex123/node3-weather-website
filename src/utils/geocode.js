const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q=' + encodeURIComponent(address) + '&access_token=pk.eyJ1IjoibmVoYWpvc2h5MTIzIiwiYSI6ImNsdjUyMzBlZjBlcWoycW1uMzkybjZmZDQifQ.w76ulkCUXbf75K7sUQN25g';
    request({ url: geocodeURL, json: true }, (error, { body }={}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (!body.features || body.features.length === 0)  {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].geometry.coordinates[0],
                latitude: body.features[0].geometry.coordinates[1],
                location: body.features[0].properties.name
            });
        }
    })
}

module.exports = geocode;
