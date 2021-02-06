let url = 'http://192.168.100.8:3001/'; //server 

export function getAllRates(data) {
    return fetch( url + 'rates/allRates', data);
}