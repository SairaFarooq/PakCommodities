import {Component} from 'react';
import './SignIn.css';
import {RecentPosts} from '../Posts/RecentPosts';

class SignUp extends Component{

    state={

    }

    handleChange =(e)=>{
        console.log(e);
    }

    handleLogin = (e) =>{
        console.log("FROM SUBMIT");
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                </div>
                
                <div className="row">

                <form onSubmit={this.handleLogin} className="grey lighten-1 col l4 offset-l1 s12 formstyle">
                    <h5 className="grey-text text-darken-3 center"><b>SIGNUP</b></h5>

                    <div className="input-field">
                        <label htmlFor="username" className="black-text" >Username : </label>
                        <input type="text" id ="username" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email" className="black-text">Email : </label>
                        <input type="email" id ="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName" className="black-text">FirstName : </label>
                        <input type="text" id ="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName" className="black-text">LastName : </label>
                        <input type="text" id ="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="phone" className="black-text">Phone : </label>
                        <input type="text" id ="phone" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password" className="black-text">Password : </label>
                        <input type="password" id ="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="confirmPassword" className="black-text">Confirm Password : </label>
                        <input type="password" id ="confirmPassword" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn teal accent-4 z-depth-0 ">SIGNUP</button>
                    </div>


                </form>


                {/* Recent Posts */}
                <RecentPosts />
                <RecentPosts />
                </div>

               
            </div>
        )
    }
}

export default SignUp