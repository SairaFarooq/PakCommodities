var config = require('../config.json');
let url = config.ipUrl; //server 


export function getAllPlans(data) {
    return fetch( url + 'plan/allplans', data);
}

export function addPlan(data) {
    console.log(data)
    return fetch( url + 'plan/addplan', data);
}
export function deletePlan(data,id) {
    return fetch( url + 'plan/deleteplan/'+id,data);
}