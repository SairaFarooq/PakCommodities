import {Component} from 'react';

class Home extends Component{
    
    state={

    }

    render(){
        return(
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

                    <div id="imports" class="col s12"><p>Test 1</p></div>
                    <div id="sugar" class="col s12"><p>Test 2</p></div>
                    <div id="pulses" class="col s12"><p>Test 3</p></div>
                    <div id="grains" class="col s12"><p>Test 4</p></div>
                    <div id="fodderseeds" class="col s12"><p>Test 5</p></div>
                    <div id="oilseeds" class="col s12"><p>Test 5</p></div>
                    <div id="spices" class="col s12"><p>Test 5</p></div>
                    <div id="guar" class="col s12"><p>Test 5</p></div>
            </div>
        )
    }

}

export default Home