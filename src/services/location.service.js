let url = 'http://192.168.100.8:3001/'; //server 

export function getAllLocations(data) {
    return fetch( url + 'location/allLocations', data);
}

export function addLocation(data) {
    console.log("Data::::", data)
    return fetch( url + 'location/addLocation', data);
}