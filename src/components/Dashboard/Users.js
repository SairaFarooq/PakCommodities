import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {approveUser, getAllUsers, deleteUser, disableUser, getExpiredUsers, getPendingUsers, getActiveUsers}from '../../services/user.service';

class Users extends Component{ 
    state={

        allUsers:[]      

    }

    componentDidMount=()=>{
        this.showTable('all');
    }

    handleChange =(e)=>{
        //console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

     /* filter by status of user */
    showTable = async(status)=>{

        if(status === 'all'){
            this.getAllUsers();

        }else if(status === "pending"){
            this.getPendingUsers();

        }else if(status === "expired"){
            this.getExpiredUsers();

        }else if(status === "active"){
            this.getActiveUsers();

        }

    }

    /* Fetch All Users */
    getAllUsers = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllUsers(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
            var users = [];
            for(let item of res){
                    users.push(item)
                }

                this.setState({ 
                    allUsers: users, 
                     
                 });
    
            
    }

    /* Fetch pending Users */
    getPendingUsers = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getPendingUsers(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
            var users = [];
            for(let item of res){
                    users.push(item)
                }

                this.setState({ 
                    allUsers: users, 
                     
                 });
    
            
    }

    /* Fetch Expired Users */
    getExpiredUsers = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getExpiredUsers(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
            var users = [];
            for(let item of res){
                    users.push(item)
                }

                this.setState({ 
                    allUsers: users, 
                     
                 });
    
            
    }
    
     /* Fetch Active Users */
    getActiveUsers = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getActiveUsers(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
            var users = [];
            for(let item of res){
                    users.push(item)
                }

                this.setState({ 
                    allUsers: users, 
                     
                 });
    
            
    }

    /* Delete user */
    deleteUser = async(id)=>{
        console.log("Delete user id :: ",id)
         
         const requestOptions = {
            method: 'DELETE'
            // headers: { 'Content-Type': 'application/json' } 
        };
        const response = await deleteUser(requestOptions,id);
        const data = await response.json();
    }

    /* Approve user */
    approveUser = async(id)=>{
        console.log("Approve user id :: ",id)
         
         const requestOptions = {
            method: 'PUT'
        };
        const response = await approveUser(requestOptions,id);
        const data = await response.json();
    }

    /* Disable User */
    disableUser = async(id)=>{
        console.log("Disable user id :: ",id)
         
         const requestOptions = {
            method: 'PUT'
        };
        const response = await disableUser(requestOptions,id);
        const data = await response.json();
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>

                {/* list of all users */}
                <div className="col l10">
                        <ul className="tabs">

                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("all")}>All</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("pending")}>PENDING</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("expired")}>EXPIRED</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("active")}>ACTIVE</a></li>

                        </ul>
                       
                        <div className=" container col s12">
                        <table>
                                <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>PHONE</th>
                                    <th>SUBSCRIPTION PLAN</th>
                                    <th>DURATION</th>
                                    <th>STATUS</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                    { this.state.allUsers.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.subscribedPlan.plan} Months </td>
                                            <td>{item.startDate} - {item.endDate}</td>
                                            <td>{item.status}</td>
                                            <td><i className="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', item._id)}>create</a></i>
                                                <i className="material-icons"><a className="delete" href="#" onClick = {() => this.deleteCategory(item._id)}>delete</a></i>
                                                {item.status === "pending" ? 
                                                    <i className="material-icons"><a className="approve" href="#" onClick = {() => this.approveUser(item._id)}>verified_user</a></i> :
                                                    <i className="material-icons"><a className="disable_user" href="#" onClick = {() => this.disableUser(item._id)}>not_interested</a></i>
                                                }
                                                
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                        </table>
                        </div>
                </div>
   
            </div>
        )}
}

export default Users