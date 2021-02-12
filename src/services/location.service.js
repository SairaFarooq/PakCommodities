var config = require('../config.json');
let url = config.ipUrl; //server 

export function getAllLocations(data) {
    return fetch( url + 'location/allLocations', data);
}

export function addLocation(data) {
    console.log("Data::::", data)
    return fetch( url + 'location/addLocation', data);
}

export function deleteLocation(data,id) {
    return fetch( url + 'location/deleteLocation/'+id,data);
}