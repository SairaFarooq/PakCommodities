import { Component } from "react";
import {Line} from 'react-chartjs-2';
import {getAllProducts} from '../../services/product.service';
import {getAllLocations} from '../../services/location.service';
import {getOldRates} from '../../services/rates.service';


class HistoricalRates extends Component{

    state={

        productId:'',
        locationId: '',
        startDate:'',
        endDate:'',
        showGraph : false,
        products : [],
        allLocations : [],

        // Update this state with API
        lineGraphData : {
                            labels: ['January', 'February', 'March','April', 'May','June', 'July', 'August','September', 'October','November','December'],
                            datasets: [
                                        {
                                            label: 'Rates',
                                            fill: false,
                                            lineTension: 0.5,
                                            backgroundColor: 'rgba(75,192,192,1)',
                                            borderColor: 'rgba(0,0,0,1)',
                                            borderWidth: 1,
                                            data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 1, 200]
                                        }
                                    ]

                        }
    }

    componentDidMount =()=>{
        this.getAllProducts();
        this.getAllLocations();
    }

     /* Fetch All products from dB */
     getAllProducts = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllProducts(requestOptions);
        const res = await response.json();
        //console.log("Response ", res);
        
       // if(res.status === 'success') {
            var products = [];
            for(let item of res){
                    products.push(item)
                }

                this.setState({ 
                    products: products, 
                     
                 });
           // }
    
            
    }

     /* Fetch All locations from dB */
     getAllLocations = async() =>{

        const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
        const response = await getAllLocations(requestOptions);
        const res = await response.json();
        //console.log("Response ", res);
        
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

    handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    // Get the result of the set params from API
    handleSubmit = async (e) =>{

        e.preventDefault();
        // console.log('Product selected : ', this.state.productId);
        // console.log('Location : ', this.state.locationId);
        // console.log('Start Date : ',this.state.startDate);
        // console.log('End Date : ', this.state.endDate);
        var getRates = {
            productId : this.state.productId,
            locationId : this.state.locationId,
            startDate : this.state.startDate,
            endDate : this.state.endDate
        } 

        /* call an API and iterate over the documents, number of documents.dates == labels and documents.rates==data */
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(getRates)
        };
        const response = await getOldRates(requestOptions);
        const res = await response.json();
        console.log("response after addCategory", res);

        var graphLabels = [];
        var graphData =[];
            for(let item of res){
                graphLabels.push(item.date);
                graphData.push(item.rate);
            }

            this.state.showGraph = true;
            this.state.lineGraphData.labels = graphLabels;
            this.state.lineGraphData.datasets[0].data = graphData;
            this.forceUpdate();      
    }

    render() {
    return (
    
    <div className="row">
      <div className="col l8 offset-l2 s12">

                <form onSubmit = {this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3 center">Search </h5>
                    {/* product */}
                    <div class-name="input-field">
                            <select className="browser-default" id="product" defaultValue={this.state.product} required onChange={this.handleChange}>
                                <option value="" disabled selected>Product</option>
                                {
                                    this.state.products.map((item)=>
                                   
                                        <option value={item._id}>{item.productNameEng}  ||  {item.productNameUrdu}</option>
                                    )
                                }
                            </select> 
                    </div>

                    <br />
                    {/* location */}
                    <div class-name="input-field">
                            <select className="browser-default" id="location" required defaultValue={this.state.locationType} onChange={this.handleChange}>
                                <option value="" disabled selected>Location Type</option>
                                {
                                    this.state.allLocations.map((item)=>
                                   
                                        <option value={item._id}>{item.locationNameEng}  || {item.locationNameUrdu} </option>
                                    )
                                }
                            </select>    
                    </div>

                    <br />
                    {/* Start Date */}
                    <label htmlFor="startDate">From : </label>
                    <div className="input-field">   
                            <input type="date" id ="startDate" required onChange={this.handleChange}/>
                    </div>

                    {/* End Date */}
                    <label htmlFor="endDate">To : </label>
                    <div className="input-field">
                            <input type="date" id ="endDate" required onChange={this.handleChange}/>
                    </div>

                    {/* search button */}
                    <div className="input-field">
                        <button className="btn teal accent-4 z-depth-0 center">SEARCH</button>
                    </div>
                </form>
               

        {this.state.showGraph ? 
        <Line
                data={this.state.lineGraphData}
                 options={{
                            title:{
                                    display:true,
                                    text:'Rates',
                                    fontSize:20
                            },
                            legend:{
                                    display:true,
                                    position:'right'
                                }
                         }}
        /> : <div></div>}
      </div>
    </div>
    );
  }
}

export default HistoricalRates