import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {addUser, getAllUsers, deleteUser}from '../../services/user.service';

class Users extends Component{ 
    state={

        allUsers:[
                    {name : "Saira", email: "saira@gmail.com", phoneNumber : "1234567", subscribedPlan:'1Month', startDate :"12-09-2020", endDate :"12-09-2020", status : 'inactive'}
                ]      

    }

    componentDidMount=()=>{
        this.getAllUsers();
    }

    handleChange =(e)=>{
        //console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Fetch All users from dB */
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

    
    /* Delete user from dB */
    deleteUser = async(id)=>{
        console.log("catgeiory items id :: ",id)
         
         const requestOptions = {
            method: 'DELETE'
            // headers: { 'Content-Type': 'application/json' } 
        };
        const response = await deleteUser(requestOptions,id);
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
                                    { this.state.allUsers.map((item,index) =>
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>{item.subscribedPlan}</td>
                                            <td>{item.startDate} - {item.endDate}</td>
                                            <td>{item.status}</td>
                                            <td><i class="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', item._id)}>create</a></i>
                                                <i class="material-icons"><a className="delete" href="#" onClick = {() => this.deleteCategory(item._id)}>delete</a></i>
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                            </table>
                </div>
   
            </div>
        )}
}

export default Users