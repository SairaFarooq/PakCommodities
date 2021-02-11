let url = 'http://192.168.100.8:3001/'; //server 


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