import AddRate from '../components/Dashboard/AddRate';

var config = require('../config.json');
let url = config.ipUrl; //server 

export function getAllRates(data) {
    return fetch( url + 'rates/allRates', data);
}

export function getCategoryRates(data, categoryId) {
    return fetch( url + 'rates/categoryRates/'+categoryId, data);
}

export function getOldRates(data) {
    return fetch( url + 'rates/getoldrates', data);
}

export function addRate(data){
    return fetch( url + 'rates/addRate', data);
}