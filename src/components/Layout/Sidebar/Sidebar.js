import {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component{
    
    state={

    }

    render(){
        return(
           
            <div className="sidebar" style={{width: "200px", height:window.innerHeight}}>
                <ul id="slide-out" className="side-nav grey darken-1">
                    
                    <li className="sidebarLinks"><a className="sidebarItem" href="/dashboard">HOME</a></li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/allRates">ALL RATES</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/notifications">NOTIFICATIONS</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addPlan">ADD PLAN</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addCategory">ADD CATEGORY</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addProduct">ADD PRODUCT</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addLocation">ADD LOCATION</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addRate">ADD RATE</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/addBlog">ADD BLOG</a> </li>
                    <li><div className="divider"></div></li>
                    <li className="sidebarLinks"><a className="sidebarItem" href="/users">USERS</a> </li>
                    <li><div className="divider"></div></li>
                    
                    
                    
                </ul>
            </div>     

            

            )
    }
}

export default Sidebar