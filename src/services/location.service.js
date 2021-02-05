let url = 'http://192.168.100.8:3001/'; //server 

export function addLocation(data) {
    return fetch( url + 'location/addLocation', data);
}
