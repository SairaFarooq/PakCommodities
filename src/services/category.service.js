var config = require('../config.json');
let url = config.ipUrl; //server 

export function getAllCategories(data) {
    return fetch( url + 'category/allCategory', data);
}

export function addCategory(data) {
    return fetch( url + 'category/addCategory', data);
}

export function deleteCategory(data,id) {
    return fetch( url + 'category/deleteCategory/'+id,data);
}