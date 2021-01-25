import {Component} from 'react';
import './Dashboard.css';
import Sidebar from '../Layout/Sidebar/Sidebar';

class Dashboard extends Component{
    
    state={

    }

    showTable = (item) =>{
       
        console.log("Table of this anchor needs to be rendered : ",item)
    }

    render(){
        return(
           
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>
   

   
                <div className="col l10">
                        <ul className="tabs">
                            <li className="tab" onClick = {this.showTable("imports")}><a href="#imports" >IMPORTS</a></li>
                            <li className="tab" onClick = {this.showTable("sugar")}><a href="#sugar" >SUGAR</a></li>
                            <li className="tab" onClick = {this.showTable("pulses")}><a href="#pulses" >PULSES</a></li>
                            <li className="tab" onClick = {this.showTable("grains")}><a href="#grains" >GRAINS</a></li>
                            <li className="tab" onClick = {this.showTable("fodderseeds")}><a href="#fodderseeds" >FODDER SEEDS</a></li>
                            <li className="tab" onClick = {this.showTable("oilseeds")}><a href="#oilseeds" >OIL SEEDS</a></li>
                            <li className="tab" onClick = {this.showTable("spices")}><a href="#spices" >SPICES</a></li>
                            <li className="tab" onClick = {this.showTable("guar")}><a href="#guar" >GUAR</a></li>
                            
                        </ul>

                        <div id="imports" className=" container col s12">
                            <table>
                                <thead>
                                <tr>
                                    <th>ITEM</th>
                                    <th>LOCATION</th>
                                    <th>DESC</th>
                                    <th>DATE</th>
                                    <th>RATE</th>
                                    <th>%</th>
                                    <th>ACTIONS</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td><i class="material-icons"><a className="edit" href="">create</a></i>
                                        <i class="material-icons"><a className="delete" href="">delete</a></i>
                                        <i class="material-icons"><a className="description" href="">description</a></i>
                                        <i class="material-icons"><a className="hideicon" href="">visibility_off</a></i>
                                    </td>
                                  
                                </tr>
                               
                                </tbody>
                            </table>
                        </div>

                        {/* <div id="sugar" class="col s12"><p>sugar</p></div>
                        <div id="pulses" class="col s12"><p>pulses</p></div>
                        <div id="grains" class="col s12"><p>grains</p></div>
                        <div id="fodderseeds" class="col s12"><p>fodder seeds</p></div>
                        <div id="oilseeds" class="col s12"><p>oil seeds</p></div>
                        <div id="spices" class="col s12"><p>spices</p></div>
                        <div id="guar" class="col s12"><p>guar</p></div> */}
                </div>
                                   
            </div>     

            

            )
    }
}

export default Dashboard