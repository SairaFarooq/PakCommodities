import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';

class AddRate extends Component{ 
    state={

        product : '',
        location :'',
        rate : '',
        description : '',
        date : ''        

    }


    handleChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Add item to API */
    addRate =()=>{
        
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                <div className="col l10">
                    <form onSubmit={this.addRate()} className="grey lighten-1 col l4 offset-l4 s12 addRateForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD Rate</b></h5>

                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" value="" onChange={this.handleChange}>
                                <option value="" disabled selected>Product</option>
                                <option value="desiChickPeas">Desi Chick Peas</option>
                                <option value="kabuliChickPeas">kabuli Chick Peas</option>
                            </select>                           
                        </div>

                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" value="" onChange={this.handleChange}>
                                <option value="" disabled selected>Location</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="bahrain">Bahrain</option>
                            </select>                           
                        </div>

                        <div className="input-field">
                            <label htmlFor="rate" className="black-text">Rate : </label>
                            <input type="number" id ="rate" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="description" className="black-text">Description: </label>
                            <input type="text" id ="description" onChange={this.handleChange}/>
                        </div>

                        <label htmlFor="date" className="black-text">Date : </label>
                        <div className="input-field">
                           
                            <input type="date" id ="date" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <button className="btn teal accent-4 z-depth-0 center">ADD</button>
                        </div>

                    </form>
                </div>
            </div>
        )}
}

export default AddRate