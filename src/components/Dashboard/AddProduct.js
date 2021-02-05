import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';

class AddProduct extends Component{ 
    state={

        category : '',
        itemName :'',
        itemNameUrdu : ''        

    }


    handleChange =(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    /* Add item to API */
    addProduct =()=>{
        
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                <div className="col l10">
                    <form onSubmit={this.addProduct()} className="grey lighten-1 col l4 offset-l4 s12 addItemForm">
                        <h5 className="grey-text text-darken-3 center"><b>ADD A PRODUCT</b></h5>

                        {/* Select a catgeory */}
                        <div className="input-field">
                            {/* <label htmlFor="category" className="black-text"></label> */}
                            <select className="browser-default" defaultValue={this.state.category} onChange={this.handleChange}>
                                <option value="" disabled selected>Category</option>
                                <option value="pulses">Pulses</option>
                                <option value="sugar">Sugar</option>
                                <option value="grains">Grains</option>
                                <option value="fodderSeeds">Fodder Seeds</option>
                                <option value="oilSeeds">Oil Seeds</option>
                                <option value="guar">Guar</option>
                                <option value="spices">Spices</option>
                            </select>                           
                        </div>

                         {/* Item name in english*/}
                        <div className="input-field">
                            <label htmlFor="productName" className="black-text">Product Name : </label>
                            <input type="text" id ="productName" onChange={this.handleChange}/>
                        </div>

                         {/* product name in urdu */}
                        <div className="input-field">
                            <label htmlFor="productNameUrdu" className="black-text">Product Name In Urdu: </label>
                            <input type="text" id ="productNameUrdu" onChange={this.handleChange}/>
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

export default AddProduct