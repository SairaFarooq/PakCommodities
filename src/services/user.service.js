var config = require('../config.json');
let url = config.ipUrl; //server 


export function getAllUsers(data) {
    return fetch( url + 'user/allusers', data);
}

export function getPendingUsers(data) {
    return fetch( url + 'user/pendingaccounts', data);
}

export function getExpiredUsers(data) {
    return fetch( url + 'user/expiredaccounts', data);
}

export function getActiveUsers(data) {
    return fetch( url + 'user/activeaccounts', data);
}

export function addUser(data) {
    return fetch( url + 'user/signup', data);
}

export function loginUser(data) {
    return fetch( url + 'user/signin', data);
}

export function deleteUser(data,id) {
    return fetch( url + 'user/deleteuser/'+id,data);
}

export function approveUser(data,id) {
      return fetch( url + 'user/approveuser/'+id,data);
}

export function disableUser(data,id) {
      return fetch( url + 'user/disableuser/'+id,data);
}