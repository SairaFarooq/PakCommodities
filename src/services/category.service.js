let url = 'http://192.168.100.8:3001/'; //server 


export function getAllCategories(data) {
    return fetch( url + 'category/allCategory', data);
}

export function addCategory(data) {
    return fetch( url + 'category/addCategory', data);
}
export function deleteCategory(data,id) {
    console.log("Data retrieved is ", data, id);
    return fetch( url + 'category/deleteCategory/'+id,data);
}