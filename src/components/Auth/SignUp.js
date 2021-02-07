import {Component} from 'react';
import './SignIn.css';
import {RecentPosts} from '../Posts/RecentPosts';

class SignUp extends Component{

    state={

        username :'',
        email :'',
        fullName :'',
        phone :'',
        password :'',
        subscriptionPlan :''

    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSignUp = (e) =>{
        e.preventDefault();
        {/* submit the data to API */}
        console.log("FROM SUBMIT");
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                </div>
                
                <div className="row">

                <form onSubmit={this.handleSignUp} className="grey lighten-1 col l4 offset-l1 s12 formstyle">
                    <h5 className="grey-text text-darken-3 center"><b>SIGNUP</b></h5>

                    <div className="input-field">
                        <label htmlFor="username" className="black-text" >Username : </label>
                        <input type="text" id ="username" required onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email" className="black-text">Email : </label>
                        <input type="email" id ="email" required  onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="fullName" className="black-text">FullName : </label>
                        <input type="text" id ="fullName" required  onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="phone" className="black-text">Phone : </label>
                        <input type="text" id ="phone" required  onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password" className="black-text">Password : </label>
                        <input type="password" id ="password"  required onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <select className="browser-default" defaultValue={this.state.subscriptionPlan} required id="subscriptionPlan" onChange={this.handleChange}>
                                <option value="" disabled  selected>Subscription Plan</option>
                                {/* {
                                    this.state.plans.map((item)=>
                                   
                                        <option value={item.categoryNameEng}>{item.categoryNameEng}  ||  {item.categoryNameUrdu}</option>
                                    )
                                } */}
                                <option value="one">1 Month</option>
                                <option value="three">3 Months</option>
                                <option value="six">6 Months</option>
                                <option value="tweleve">12 Months</option>
                                
                            </select> 
                    </div>

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