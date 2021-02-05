let url = 'http://192.168.100.8:3001/'; //server 


export function getAllProducts(data) {
    return fetch( url + 'product/allProducts', data);
}

export function addProduct(data) {
    console.log("From product.service == ", data)
    return fetch( url + 'product/addproduct', data);
}
export function deleteProduct(data,id) {
    console.log("Data retrieved is ", data, id);
    return fetch( url + 'product/deleteproduct/'+id,data);
}