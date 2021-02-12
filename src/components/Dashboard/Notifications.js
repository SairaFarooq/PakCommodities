import {Component} from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import './Dashboard.css';

class Notifications extends Component{

    render(){
        return(
            <div className="row">
                <div className="sidebar col l2">
                    <Sidebar />
                </div>

                <br />
                
                <div className="col l10">
                    This is notifications component
                </div>
            </div>
        )
    }

}

export default Notifications