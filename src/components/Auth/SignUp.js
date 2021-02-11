import {Component} from 'react';
import './SignIn.css';
import {RecentPosts} from '../Posts/RecentPosts';
import { addUser } from '../../services/user.service';

class SignUp extends Component{

    state={

        name :'',
        email :'',
        phoneNumber :'',
        password :'',
        subscriptionPlan :'',
        transactionId : 'transId',
        startDate : '',
        endDate: '',
        status : 'pending'

    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSignUp = async(e) =>{
        e.preventDefault();

        // Calculate the endDate basis the subscription plan
        var StartDate = new Date();
        var subplan = parseInt(this.state.subscriptionPlan);
        var EndDate = new Date (StartDate.setMonth(StartDate.getMonth() + subplan));
        console.log("End date is ===", EndDate);

        {/* submit the data to API */}
        var user = {
            name : this.state.name,
            password : this.state.password,
            phoneNumber : this.state.phoneNumber,
            email : this.state.email,
            subscribedPlan: {plan : this.state.subscriptionPlan},
            transactionId : this.state.transactionId,
            startDate : new Date(),
            endDate : EndDate,
            status : this.state.status
        }
        console.log("FROM SUBMIT", user);

        //saving data in mongo
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(user)
        };
        const response = await addUser(requestOptions);
        const res = await response.json();
        console.log("response after addUser", res);


        }

    render(){
        return(
            <div className="container">
                <div className="row">
                </div>
                
                <div className="row">

                <form onSubmit={this.handleSignUp} className="grey lighten-1 col l4 offset-l1 s12 formstyle">
                    <h5 className="grey-text text-darken-3 center"><b>SIGNUP</b></h5>
                    
                    {/* name */}
                    <div className="input-field">
                        <label htmlFor="name" className="black-text" >Name : </label>
                        <input type="text" id ="name" required onChange={this.handleChange}/>
                    </div>
                    
                    {/* email */}
                    <div className="input-field">
                        <label htmlFor="email" className="black-text">Email : </label>
                        <input type="email" id ="email" required  onChange={this.handleChange}/>
                    </div>
                    
                    {/* Phone Number */}
                    <div className="input-field">
                        <label htmlFor="phoneNumber" className="black-text">Phone Number: </label>
                        <input type="text" id ="phoneNumber" required  onChange={this.handleChange}/>
                    </div>
                   
                    {/* Password */}
                    <div className="input-field">
                        <label htmlFor="password" className="black-text">Password : </label>
                        <input type="password" id ="password"  required onChange={this.handleChange}/>
                    </div>
                    
                    {/* Subscription Plan */}
                    <div className="input-field">
                        <select className="browser-default" defaultValue={this.state.subscriptionPlan} required id="subscriptionPlan" onChange={this.handleChange}>
                                <option value="" disabled  selected>Subscription Plan</option>
                                {/* {
                                    this.state.plans.map((item)=>
                                   
                                        <option value={item.categoryNameEng}>{item.categoryNameEng}  ||  {item.categoryNameUrdu}</option>
                                    )
                                } */}
                                <option value="1">1 Month</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="12">12 Months</option>
                                
                            </select> 
                    </div>
                    
                    {/* Signup button */}
                    <div className="input-field">
                        <button className="btn teal accent-4 z-depth-0 ">SIGNUP</button>
                    </div>


                </form>


                {/* Recent Posts and recent comments */}
                <RecentPosts />
                <RecentPosts />
                </div>

               
            </div>
        )
    }
}

export default SignUp