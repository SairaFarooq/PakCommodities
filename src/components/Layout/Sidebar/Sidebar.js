import {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component{
    
    state={

    }

    render(){
        return(
           
            <div className="sidebar">
                <ul id="slide-out" className="side-nav grey darken-1">
                    
                    <li className="sidebarLinks"><a className="sidebarItem" href="/dashboard">HOME</a></li>
                    <li><div class="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/allRates">ALL RATES</a> </li>
                    <li><div class="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addItem">ADD ITEM</a> </li>
                    <li><div class="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addLocation">ADD LOCATION</a> </li>
                    <li><div class="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addRate">ADD RATE</a> </li>
                    <li><div class="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addBlog">ADD BLOG</a> </li>
                    <li><div class="divider"></div></li>
                    
                    
                    
                </ul>
            </div>     

            

            )
    }
}

export default Sidebar