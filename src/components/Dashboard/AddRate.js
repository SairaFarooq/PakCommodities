import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';

import {addRate} from '../../services/rates.service';

class AddRate extends Component{ 
    
    state={

        product : {},
        location :{},
        category : {},
        rate : '',
        descriptionEng : '',
        descriptionUrdu : '',
        date : '' ,
        percentage : '0',
        sequence : 0

    }

    componentDidMount = () => {
        var today = new Date();
        var month;
        if((today.getMonth()+1) < 10) {
            month = "0"+(today.getMonth() + 1);
        } else {
            month = today.getMonth() + 1;
        }
        var dateString = today.getFullYear() + "-" + month + "-" + today.getDate()
        console.log("date string : ", dateString)
        this.setState({
            date: dateString
        })
    }

    handleChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Add item to API */
    addRate = async(e)=>{
        e.preventDefault();

        var addThisRate = {

            product : this.state.product,
            location :this.state.location,
            category : this.state.category,
            rate : this.state.rate,
            descriptionEng : this.state.descriptionEng,
            descriptionUrdu : this.state.descriptionUrdu,
            date : this.state.date,
            percentage : this.state.percentage,
            sequence : this.state.sequence
            
        }
    
        //saving data in mongo
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(addThisRate)
        };
        const response = await addRate(requestOptions);
        const res = await response.json();
        console.log("response after addRate", res)

        // after success set the values to null of the form

        
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                <div className="col l10">
                    <form onSubmit={this.addRate} className="grey lighten-1 col l4 offset-l4 s12 addRateForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD Rate</b></h5>

                         {/* Select the category of product */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" defaultValue={this.state.product} onChange={this.handleChange}>
                                <option value="" disabled selected>Product</option>
                                <option value="desiChickPeas">Desi Chick Peas</option>
                                <option value="kabuliChickPeas">kabuli Chick Peas</option>
                            </select>                           
                        </div>

                         {/* Select Location */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" defaultValue={this.state.location} onChange={this.handleChange}>
                                <option value="" disabled selected>Location</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="bahrain">Bahrain</option>
                            </select>                           
                        </div>

                         {/* Add rate */}
                        <div className="input-field">
                            <label htmlFor="rate" className="black-text">Rate : </label>
                            <input type="number" id ="rate" onChange={this.handleChange}/>
                        </div>

                         {/* Add descriptionEng*/}
                        <div className="input-field">
                            <label htmlFor="descriptionEng" className="black-text">Description In English: </label>
                            <input type="text" id ="descriptionEng" onChange={this.handleChange}/>
                        </div>

                         {/* Add descriptionUrdu*/}
                        <div className="input-field">
                            <label htmlFor="descriptionUrdu" className="black-text">Description In Urdu: </label>
                            <input type="text" id ="descriptionUrdu" onChange={this.handleChange}/>
                        </div>

                         {/* Date */}
                        <label htmlFor="date" className="black-text">Date : </label>
                        <div className="input-field">
                           
                            <input type="date" id ="date" defaultValue={this.state.date} disabled/>
                        </div>

                         {/*Add button */}
                        <div className="input-field">
                            <button className="btn teal accent-4 z-depth-0 center">ADD</button>
                        </div>

                    </form>
                </div>
            </div>
        )}
}

export default AddRate