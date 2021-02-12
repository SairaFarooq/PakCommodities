var config = require('../config.json');
let url = config.ipUrl; //server 


export function getAllProducts(data) {
    return fetch( url + 'product/allProducts', data);
}

export function addProduct(data) {
    console.log("From product.service == ", data)
    return fetch( url + 'product/addproduct', data);
}

export function deleteProduct(data,id) {
    return fetch( url + 'product/deleteproduct/'+id,data);
}