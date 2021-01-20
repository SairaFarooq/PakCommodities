import {Component} from 'react';
import './SignIn.css';

class SignIn extends Component{

    state={

    }

    handleChange =(e)=>{
        console.log(e);
    }

    handleSignUp = (e) =>{
        console.log("FROM SUBMIT");
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                </div>

                <div className="row">

                <form onSubmit={this.handleSignUp} className="grey lighten-1 col l4 offset-l4 s12 formstyle">
                    <h5 className="grey-text text-darken-3 center"><b>SIGNIN</b></h5>

                    <div className="input-field">
                        <label htmlFor="username" className="black-text">Username : </label>
                        <input type="text" id ="username" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password" className="black-text">Password : </label>
                        <input type="password" id ="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn teal accent-4 z-depth-0 ">LOGIN</button>
                    </div>


                </form>


                </div>
                
            </div>
        )
    }
}

export default SignIn