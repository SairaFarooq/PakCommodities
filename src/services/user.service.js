let url = 'http://192.168.100.8:3001/'; //server 


export function getAllUsers(data) {
    return fetch( url + 'user/allUsers', data);
}

export function addUser(data) {
    return fetch( url + 'user/addUser', data);
}
export function deleteUser(data,id) {
  //  console.log("Data retrieved is ", data, id);
    return fetch( url + 'user/deleteUser/'+id,data);
}