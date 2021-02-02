import { Component } from "react";
import {Line} from 'react-chartjs-2';

// const state = {
//     labels: ['January', 'February', 'March','April', 'May','June', 'July', 'August','September', 'October','November','December'],
//     datasets: [
//       {
//         label: 'Rainfall',
//         fill: false,
//         lineTension: 0.5,
//         backgroundColor: 'rgba(75,192,192,1)',
//         borderColor: 'rgba(0,0,0,1)',
//         borderWidth: 1,
//         data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 1, 200]
//       }
//     ]
//   }



class HistoricalRates extends Component{

    state={

        category:'',
        location : '',
        startDate:'',
        endDate:'',
        showGraph : false,
        lineGraphData : {
                            labels: ['January', 'February', 'March','April', 'May','June', 'July', 'August','September', 'October','November','December'],
                            datasets: [
                                        {
                                            label: 'Rainfall',
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

    handleChange =(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) =>{

        e.preventDefault();
            this.setState({
                showGraph : true
            })
        

        /* call an API and iterate over the documents, number of documents.dates == labels and documents.rates==data */
        if(this.state.category === "pulses"){
            console.log("PULSES was selected")

        }else if(this.state.category === "grains"){
            console.log("GRAINS was selected")
        }

    }

    render() {
    return (
      <div className="container">

                <form onSubmit = {this.handleSubmit} className="white col l4 offset-l4">
                    <h5 className="grey-text text-darken-3">Search </h5>
                    {/* category */}
                    <div class-name="input-field">
                            <select className="browser-default" id="category" defaultValue={this.state.category} onChange={this.handleChange}>
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

                    {/* location */}
                    <div class-name="input-field">
                            <select className="browser-default" id="location" defaultValue={this.state.locationType} onChange={this.handleChange}>
                                <option value="" disabled selected>Location Type</option>
                                <option value="local">Local</option>
                                <option value="international">International</option>
                            </select>    
                    </div>

                    {/* Start Date */}
                    <div className="input-field">   
                            <input type="date" id ="startDate"/>
                    </div>

                    {/* End Date */}
                    <div className="input-field">
                            <input type="date" id ="endDate"/>
                    </div>

                    {/* search button */}
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SEARCH</button>
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
    );
  }
}

export default HistoricalRates