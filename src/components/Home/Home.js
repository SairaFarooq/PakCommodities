import {Component} from 'react';
import pulses from '../../assets/pulses.jpg';
import spices from '../../assets/spices.jpg';
import grains from '../../assets/grains.jpg';
import './Home.css';

class Home extends Component{
    
    state={

    }

    render(){
        return(
            <div>
                <div className="carousel carousel-slider" data-indicators="true" >
                    
                    <a className="carousel-item" href="#one!"><img src={spices}/></a>
                    <a className="carousel-item" href="#one!"><img src={grains}/></a>
                    <a className="carousel-item" href="#one!"><img src={pulses}/></a>
                    
                </div>

                <div className="container">
                    {/* //Tabss : View table*/}
                    <div className="row">
                        <ul class="tabs">
                            <li class="tab col l1"><a href="#imports">IMPORTS</a></li>
                            <li class="tab col l1"><a class="active" href="#sugar">SUGAR</a></li>
                            <li class="tab col l1"><a href="#pulses">PULSES</a></li>
                            <li class="tab col l1"><a href="#grains">GRAINS</a></li>
                            <li class="tab col l2"><a href="#fodderseeds">FODDER SEEDS</a></li>
                            <li class="tab col l2"><a href="#oilseeds">OIL SEEDS</a></li>
                            <li class="tab col l1"><a href="#spices">SPICES</a></li>
                            <li class="tab col l2"><a href="#guar">GUAR</a></li>
                            
                        </ul>

                        <div id="imports" class=" container col s12">
                            <table>
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
                                <tr>
                                    <td>Alvin</td>
                                    <td>Eclair</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Alan</td>
                                    <td>Jellybean</td>
                                    <td>$3.76</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                </tr>
                                <tr>
                                    <td>Jonathan</td>
                                    <td>Lollipop</td>
                                    <td>$7.00</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                    <td>$0.87</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div id="sugar" class="col s12"><p>sugar</p></div>
                        <div id="pulses" class="col s12"><p>pulses</p></div>
                        <div id="grains" class="col s12"><p>grains</p></div>
                        <div id="fodderseeds" class="col s12"><p>fodder seeds</p></div>
                        <div id="oilseeds" class="col s12"><p>oil seeds</p></div>
                        <div id="spices" class="col s12"><p>spices</p></div>
                        <div id="guar" class="col s12"><p>guar</p></div>
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
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (pakistani time)</li>
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
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (pakistani time)</li>
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
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (pakistani time)</li>
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
                                    <li className="bullets">You can call our Trading Experts from 4pm-8pm (pakistani time)</li>
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