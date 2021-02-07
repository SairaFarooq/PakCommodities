import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';
import {addLocation, getAllLocations, deleteLocation} from '../../services/location.service';

class AddLocation extends Component{

    state={

        locationType : '',
        locationName :'',
        locationNameUrdu : '' ,
        allLocations :[]       

    }

    componentDidMount =()=>{
        this.getAllLocations();
    }

    handleChange =(e)=>{
       // console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

     /* Fetch All locations from dB */
    getAllLocations = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllLocations(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
        
       // if(res.status === 'success') {
            var locations = [];
            for(let item of res){
                    locations.push(item)
                }

                this.setState({ 
                    allLocations: locations, 
                     
                 });
           // }
    
            
    }

   /* Add locationto dB */
    addLocationItem = async (e) =>{
    e.preventDefault();

    var addThisLocation = {
        locationNameEng : this.state.locationName,
        locationNameUrdu : this.state.locationNameUrdu,
        type : this.state.locationType
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
    
    /* Delete location from dB */
    deleteLocation = async(id)=>{
        
         const requestOptions = {
            method: 'DELETE'       
        };
        const response = await deleteLocation(requestOptions,id);
        const data = await response.json();
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>

                 {/* list of all locations */}
                 <div className="col l4">
                <table>
                                <thead>
                                <tr>
                                    <th>LOCATION TYPE</th>
                                    <th>LOCATION</th>
                                    <th>URDU</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                    { this.state.allLocations.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item.type}</td>
                                            <td>{item.locationNameEng}</td>
                                            <td>{item.locationNameUrdu}</td>
                                            <td><i class="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', item._id)}>create</a></i>
                                                <i class="material-icons"><a className="delete" href="#" onClick = {() => this.deleteLocation(item._id)}>delete</a></i>
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                            </table>
                </div>

                {/* form to add Location */}
                <div className="col l6">
                    <form onSubmit={this.addLocationItem} className="grey lighten-1 col l8 offset-l1 s12 addLocationForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD LOCATION</b></h5>

                         {/* Select Location */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" defaultValue={this.state.locationType} id="locationType" onChange={this.handleChange}>
                                <option value="" disabled selected>Location Type</option>
                                <option value="Local">Local</option>
                                <option value="International">International</option>
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