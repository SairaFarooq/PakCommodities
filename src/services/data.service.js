let url = 'http://192.168.100.41:3001/'; //server 

export function addLocation(data) {
    return fetch( url + 'location/addLocation', data);
}


// export function addOffer(data) {
//     return fetch( url + 'offers/addOffer', data);
// }

// export function deleteOffer(data) {
//     return fetch( url + 'offers/deleteOffer', data);
// }

// export function getPreviousSeries(data) {
//     return fetch( url + 'offers/getPreviousSeries', data);
// }

// export function getNextSeries(data) {
//     return fetch( url + 'offers/getNextSeries', data);
// }

// export function getSeriesInYieldPeriod(data) {
//     console.log("data", data)
//     return fetch( url + 'offers/getSeriesInYieldPeriod', data);
// }