import {Component} from 'react';
import pulses from '../../assets/pulses.jpg';
import spices from '../../assets/spices.jpg';
import grains from '../../assets/grains.jpg';
import './Home.css';

class Home extends Component{
    
    state={
        loadTableFor : '',
        tableData : []

    }

    componentDidMount = () =>{

        ///* API call to fetch table data : by default for imports */
        this.setState({
            tableData : [
                            {item : 'Pulses', location : 'bahrain', description : 'hello world', date : '2021-01-27', rate : '100', percent: '10' },
                            {item : 'Pulses', location : 'bahrain', description : 'hello world', date : '2021-01-27', rate : '100', percent: '10' }
                        ]
        })
    }

    showTable = (item) =>{
      
        console.log("Table of this anchor needs to be rendered : ",item)
        /* API call for table data on click of tabs */
        this.setState({
            tableData : [
                            {item : item, location : 'bahrain', description : 'hello world', date : '2021-01-27', rate : '100', percent: '10' },
                            {item : item, location : 'bahrain', description : 'hello world', date : '2021-01-27', rate : '100', percent: '10' }
                        ]
        })



    }

    render(){
        return(
            <div>
                <div className="carousel carousel-slider" data-indicators="true" >
                    
                    {/* <a className="carousel-item" href="#one!"><img src={spices}/></a>
                    <a className="carousel-item" href="#one!"><img src={grains}/></a> */}
                    <a className="carousel-item" href="#one!"><img src={pulses}/></a>
                    
                </div>

                <div className="container">
                    {/* //Tabss : View table*/}
                    <div className="row">
                        <ul className="tabs">
                            <li className="tab col l1" ><a href="#" onClick = {()=>this.showTable("imports")}>IMPORT</a></li>
                            <li className="tab col l1" ><a href="#" onClick = {()=>this.showTable("pulses")}>PULSES</a></li>
                            <li className="tab col l1" ><a href="#" onClick = {()=>this.showTable("grains")}>GRAINS</a></li>
                            <li className="tab col l2" ><a href="#" onClick = {()=>this.showTable("fodderseeds")}>FODDER SEEDS</a></li>
                            <li className="tab col l2" ><a href="#" onClick = {()=>this.showTable("oilseeds")}>OIL SEEDS</a></li>
                            <li className="tab col l2" ><a href="#" onClick = {()=>this.showTable("spices")}>SPICES</a></li>
                            <li className="tab col l2" ><a href="#" onClick = {()=>this.showTable("guar")}>GUAR</a></li>
                            
                        </ul>

                        <div id="imports" class="container col s12">
                            <table className="homeTable">
                                <thead>
                                <tr>
                                    <th>ITEM</th>
                                    <th>LOCATION</th>
                                    <th>DESC</th>
                                    <th>DATE</th>
                                    <th>RATE</th>
                                    <th>%</th>
                                </tr>
                                </thead>

                                <tbody>
                                {this.state.tableData.map((item,index) =>
                                        <tr key={index}>
                                            <td>{item.item}</td>
                                            <td>{item.location}</td>
                                            <td>{item.description}</td>
                                            <td>{item.date}</td>
                                            <td>{item.rate}</td>
                                            <td>{item.percent}</td>
                                        </tr>                                
                                )}    
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <br/>

                    {/* Cards for business plans */}

                    <div class="row">
                        <h4 className="center"><b>BUSINESS PLANS</b></h4>

                        <div class="col s12 m3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title"><b>12 MONTHS</b></span>
                                <ul className="bullets">
                                    <li className="overlined bullets">Only 512 USD or 79,360 PKR </li>
                                    <li className="bullets">Access to Real-Time Rates and details</li>
                                    <li className="bullets">Access to minute by minute updates</li>
                                    <li className="bullets">Access to Comments of Trading Experts, local traders, indenters, brokers</li>
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (PST)</li>
                                    <li className="bullets">Access Time for 12 months</li>
                                </ul>
                            </div>
                            <div class="card-action">
                                <p className="white-text">Only 326 USD or 50,000 PKR</p> 
                                <a class="waves-effect teal accent-4 btn-small"><b>SUBSCRIBE</b></a>
                            </div>
                        </div>
                        </div>

                        <div class="col s12 m3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title"><b>6 MONTHS</b></span>
                                <ul className="bullets">
                                    <li className="overlined bullets">Only 326 USD or 50,530 PKR</li>
                                    <li className="bullets">Access to Real-Time Rates and details</li>
                                    <li className="bullets">Access to minute by minute updates</li>
                                    <li className="bullets">Access to Comments of Trading Experts, local traders, indenters, brokers</li>
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (PST)</li>
                                    <li className="bullets">Access Time for 6 months</li>
                                </ul>
                            </div>
                            <div class="card-action">
                                <p className="white-text">Only 200 USD or 30,000 PKR</p> 
                                <a class="waves-effect teal accent-4 btn-small"><b>SUBSCRIBE</b></a>
                            </div>
                        </div>
                        </div>

                        <div class="col s12 m3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title"><b>3 MONTHS</b></span>
                                <ul className="bullets">
                                    <li className="overlined bullets">Only 163 USD or 25,265 PKR</li>
                                    <li className="bullets">Access to Real-Time Rates and details</li>
                                    <li className="bullets">Access to minute by minute updates</li>
                                    <li className="bullets">Access to Comments of Trading Experts, local traders, indenters, brokers</li>
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (PST)</li>
                                    <li className="bullets">Access Time for 3 months</li>
                                </ul>
                            </div>
                            <div class="card-action">
                                <p className="white-text">Only 110 USD or 16500 PKR</p> 
                                <a class="waves-effect teal accent-4 btn-small"><b>SUBSCRIBE</b></a>
                            </div>
                        </div>
                        </div>

                        <div class="col s12 m3">
                        <div class="card blue-grey darken-1">
                            <div class="card-content white-text">
                                <span class="card-title"><b>1 MONTH</b></span>
                                <ul className="bullets">
                                    <li className="bullets">Access to Real-Time Rates and details</li>
                                    <li className="bullets">Access to minute by minute updates</li>
                                    <li className="bullets">Access to Comments of Trading Experts, local traders, indenters, brokers</li>
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (PST)</li>
                                    <li className="bullets">Access Time for 1 months</li>
                                </ul>
                            </div>
                            <div class="card-action">
                                <p className="white-text">Only 38 USD or 5800 PKR</p> 
                                <a class="waves-effect teal accent-4 btn-small"><b>SUBSCRIBE</b></a>
                            </div>
                        </div>
                        </div>
                    </div>


                </div>
               

             </div>
            
        )
    }

}

export default Home