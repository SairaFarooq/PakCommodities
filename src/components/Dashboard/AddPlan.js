import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {addPlan, getAllPlans, deletePlan}from '../../services/plan.service';

class AddPlan extends Component{ 
    state={

        planName :'',
        planDuration : '',
        planPricePKR : '',
        planPriceUSD : '',
        planDescription : '' ,
        allPlans : []      

    }

    componentDidMount=()=>{
        this.getAllPlans();
    }

    handleChange =(e)=>{
        //console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

     /* Fetch All Plans */
     getAllPlans = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllPlans(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
            var Plans = [];
            for(let item of res){
                    Plans.push(item)
                }

                this.setState({ 
                    allPlans: Plans, 
                     
                 });
        
    
            
    }

     /* Add Plan */
     addPlanItem = async(e)=>{
        e.preventDefault();

        var addThisPlan = {
            planName : this.state.planName,
            planDuration : this.state.planDuration,
            planPricePKR : this.state.planPricePKR,
            planPriceUSD : this.state.planPriceUSD,
            planDescription : this.state.planDescription ,
        }
    
        //saving data in mongo
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(addThisPlan)
        };
        const response = await addPlan(requestOptions);
        const res = await response.json();
        console.log("response after addPlan", res)

        // after success set the values to null of the form

        
    }

    /* Delete Plan */
    deletePlan = async(id)=>{
        console.log("plan items id :: ",id)
         
         const requestOptions = {
            method: 'DELETE'
        };
        const response = await deletePlan(requestOptions,id);
        const data = await response.json();
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>

                {/* list of all Plans */}
                <div className="col l4">
                <table>
                                <thead>
                                <tr>
                                    <th>PLAN</th>
                                    <th>DURATION</th>
                                    <th>PRICE(PKR)</th>
                                    <th>PRICE(USD)</th>
                                    <th>DESCRIPTION</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                    { this.state.allPlans.map((item,index) =>
                                        <tr key={item._id}>
                                            <td>{item.planName}</td>
                                            <td>{item.planDuration}</td>
                                            <td>{item.planPricePKR}</td>
                                            <td>{item.planPriceUSD}</td>
                                            <td>{item.planDescription}</td>
                                            <td><i class="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', item._id)}>create</a></i>
                                                <i class="material-icons"><a className="delete" href="#" onClick = {() => this.deletePlan(item._id)}>delete</a></i>
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                            </table>
                </div>
   
                 {/* form to add new category */}
                <div className="col l6 addCategory">
                    <form onSubmit={this.addPlanItem} className="grey lighten-1 col l8 offset-l1 s12 addCategoryForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD A PLAN</b></h5>


                         {/* Plan Name*/}
                        <div className="input-field">
                            <label htmlFor="planName" className="black-text">Plan Name : </label>
                            <input type="text" id ="planName" onChange={this.handleChange}/>
                        </div>

                         {/* Plan Duration*/}
                         <label htmlFor="planDuration" className="black-text">Plan Duration : </label>
                         <div className="input-field">
                            <input type="Number" id ="planDuration" onChange={this.handleChange}/>
                        </div>

                         {/* plan Price in PKR */}
                        <div className="input-field">
                            <label htmlFor="planPricePKR" className="black-text">Price (PKR): </label>
                            <input type="text" id ="planPricePKR" onChange={this.handleChange}/>
                        </div>

                         {/* plan Price in USD */}
                         <div className="input-field">
                            <label htmlFor="planPriceUSD" className="black-text">Price (USD): </label>
                            <input type="text" id ="planPriceUSD" onChange={this.handleChange}/>
                        </div>

                        {/* description */}
                        <label htmlFor="planDescription" className="black-text">Plan Description : </label>
                        <div className="input-field">
                            <textarea id ="planDescription" onChange={this.handleChange}/>
                        </div>

                        
                         {/* Add button */}
                        <div className="input-field">
                            <button className="btn teal accent-4 z-depth-0 center">ADD</button>
                        </div>

                    </form>
                </div>
            </div>
        )}
}

export default AddPlan