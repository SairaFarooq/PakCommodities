import {Component} from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom';
import Sidebar from '../Layout/Sidebar/Sidebar';
import AddRate from './AddRate';
import {getAllRates} from '../../services/rates.service';


class Dashboard extends Component{
    
    state={

        //loadTableFor : 'import',
        tableData : [],
        openEditDialog: false,
        openDeleteDialog: false,
        openDescriptionDialog: false,
        openHideDialog: false,
        selectedItem: '',
        selectedIndex: null,
        date : ''  
    }

    componentDidMount = ()=>{
        //set current date
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
        ///* API call to fetch table data : by default for imports */
        // this.setState({
        //     tableData : [
        //                     {item : 'Pulses', location : 'bahrain', description : 'hello world', date : '2021-01-27', rate : '100', percent: '10' },
        //                     {item : 'Pulses', location : 'bahrain', description : 'hello world', date : '2021-01-27', rate : '100', percent: '10' }
        //                 ]
        // })
        this.showTable('import');

    } 

    // UPDATE THIS : Instead of all rates fetch the filtered rates, still to be done on backend
    showTable = async (item) =>{
      
        console.log("Table of this anchor needs to be rendered : ",item)
        /* API call for table data on click of tabs */
        // fetch the rates from dB

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await getAllRates(requestOptions);
        const res = await response.json();
        console.log("Response ", res);
    
       
            var rates = [];
            for(let item of res){
                 rates.push(item)
            }

            this.setState({ 
                    tableData: rates, 
                        
            });

    }

    openDialog = (action, index) => {
        this.setState({
            selectedItem: this.state.tableData[index],
            selectedIndex: index
        })
        if(action === 'edit') {
            this.setState({
                openEditDialog: true
            })
        } else if(action === 'delete') {
            this.setState({
                openDeleteDialog: true
            })
        } else if(action === 'description') {
            this.setState({
                openDescriptionDialog: true
            })
        } else if(action === 'hideIcon') {
            this.setState({
                openHideDialog: true
            })
        }
    }

    closeDialog = (action) => {
        if(action === 'edit') {
            this.setState({
                openEditDialog: false
            })
        } else if(action === 'delete') {
            this.setState({
                openDeleteDialog: false
            })
        } else if(action === 'description') {
            this.setState({
                openDescriptionDialog: false
            })
        } else if(action === 'hideIcon') {
            this.setState({
                openHideDialog: false
            })
        }
    }

    edit = () => {
        var index = this.state.selectedIndex;
        console.log("Index from edit : ", this.state.tableData[index]);
    
    }

    delete =(index)=>{
        console.log("Index from delete : ", index)

    }

    description =(index)=>{
        console.log("Index from description : ", index)

    }

    hideIcon =(index)=>{
        console.log("Index from hideIcon : ", index)

    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   
                {/* Tabs for viewing table */}
                <div className="col l10">
                        <ul className="tabs">
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("imports")}>IMPORT</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("pulses")}>PULSES</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("grains")}>GRAINS</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("sugar")}>SUGAR</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("fodderseeds")}>FODDER SEEDS</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("oilseeds")}>OIL SEEDS</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("spices")}>SPICES</a></li>
                            <li className="tab" ><a href="#" onClick = {()=>this.showTable("guar")}>GUAR</a></li>
                            
                        </ul>

                        <div className=" container col s12">
                            <table>
                                <thead>
                                <tr>
                                    <th>ITEM</th>
                                    <th>LOCATION</th>
                                    <th>DESCRIPTION</th>
                                    <th>DATE</th>
                                    <th>RATE</th>
                                    <th>%</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                    { this.state.tableData.map((item,index) =>
                                        <tr key={index}>
                                            <td>{item.product.productNameEng}</td>
                                            <td>{item.location.locationNameEng}</td>
                                            <td>{item.descriptionEng}</td>
                                            <td>{item.date}</td>
                                            <td>{item.rate}</td>
                                            <td>{item.percentage}</td>
                                            <td><i class="material-icons"><a className="edit" href="#" onClick = {() => this.openDialog('edit', index)}>create</a></i>
                                                <i class="material-icons"><a className="delete" href="#" onClick = {() => this.openDialog('delete', index)}>delete</a></i>
                                                <i class="material-icons"><a className="description" href="#" onClick = {() => this.openDialog('description', index)}>description</a></i>
                                                <i class="material-icons"><a className="hideicon" href="#" onClick = {() => this.openDialog('hideIcon', index)}>visibility_off</a></i>
                                            </td>
                                        </tr>                                
                                    )}                                
                                </tbody>
                            </table>
                        </div>
                </div>

                { this.state.openEditDialog ? 
                <div>
                    <div id="modal1" className="modal">    
                        <form onSubmit={this.edit()} className="form-edit modal-content">
                            <h5 className="grey-text text-darken-3 center"><b>Edit Item</b></h5>

                            {/* Select the category of product */}
                            <div className="input-field">
                                {/* <label htmlFor="category" className="black-text"></label> */}
                                <select className="browser-default" defaultValue={this.state.selectedItem.product.productNameEng} onChange={this.handleChange}>
                                    <option value="pulses">Pulses</option>
                                    <option value="kabuliChickPeas">kabuli Chick Peas</option>
                                </select>                           
                            </div>

                            {/* Select Location */}
                            <div className="input-field">
                                {/* <label htmlFor="category" className="black-text"></label> */}
                                <select className="browser-default" defaultValue={this.state.selectedItem.location.locationNameEng} onChange={this.handleChange}>
                                    <option value="pakistan">Pakistan</option>
                                    <option value="bahrain">Bahrain</option>
                                </select>                           
                            </div>

                            {/* Add rate */}
                            <label htmlFor="rate" className="black-text">Rate : </label>
                            <div className="input-field">                                  
                                <input type="number" id ="rate" value={this.state.selectedItem.rate} onChange={this.handleChange}/>
                            </div>

                            {/* Add description*/}
                            <label htmlFor="description" className="black-text">Description: </label>
                            <div className="input-field">
                                <input type="text" id ="description" value={this.state.selectedItem.descriptionEng} onChange={this.handleChange}/>
                            </div>

                            {/* Date */}
                            <label htmlFor="date" className="black-text">Date : </label>
                            <div className="input-field">

                                <input type="date" id ="date" defaultValue={this.state.date} disabled/>
                            </div>

                            {/*Add button */}
                            <div className="input-field right">
                                <button className="btn grey darken-2 z-depth-0 editbtn" onClick={()=>this.closeDialog('edit')}>CANCEL</button>
                                <button className="btn teal accent-4 z-depth-0 editbtn">UPDATE</button>
                            </div>                            
                        </form>
                       
                    </div> <div class="modal-overlay"></div> 
                    </div> : <div></div>
                }                         
            </div>   
        )
    }
}

export default Dashboard