import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {addLocation} from '../../services/location.service';

class AddLocation extends Component{

    state={

        locationType : '',
        locationName :'',
        locationNameUrdu : ''        

    }


    handleChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

   /* Add item (API call) */
   addLocationItem = async (e) =>{
    e.preventDefault();

    var addThisLocation = {
        locationNameEng : this.state.locationName,
        locationNameUrdu : this.state.locationNameUrdu,
        locationType : this.state.locationType
    }

    //saving data in mongo
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(addThisLocation)
    };
    const response = await addLocation(requestOptions);
    const res = await response.json();
    console.log("response after addLocation", res)

    
    
}
    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                <div className="col l10">
                    <form onSubmit={this.addLocationItem} className="grey lighten-1 col l4 offset-l4 s12 addLocationForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD LOCATION</b></h5>

                         {/* Select Location */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" defaultValue={this.state.locationType} onChange={this.handleChange}>
                                <option value="" disabled selected>Location Type</option>
                                <option value="local">Local</option>
                                <option value="international">International</option>
                            </select>                           
                        </div>

                         {/* Location Name in english */}
                        <div className="input-field">
                            <label htmlFor="locationName" className="black-text">Location Name : </label>
                            <input type="text" id ="locationName" onChange={this.handleChange}/>
                        </div>

                         {/* Location Name in Urdu */}
                        <div className="input-field">
                            <label htmlFor="locationNameUrdu" className="black-text">Location Name In Urdu: </label>
                            <input type="text" id ="locationNameUrdu" onChange={this.handleChange}/>
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

export default AddLocation