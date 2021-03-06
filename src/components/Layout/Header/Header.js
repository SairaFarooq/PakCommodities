// Header : top of the page
import logopc from '../../../logopc.PNG';
import logo2 from '../../../assets/logo2.png';
import './Header.css';
import {NavLink, Link} from 'react-router-dom';


function toggleTheme() {
    console.log('Theme toggle clicked')
}

const Header = () =>{
    return(
        
        <nav className="nav-wrapper grey lighten-5 topnav">
            <div className="container">

            <a href="/"><img className="logo" src={logo2} alt="LOGO"/></a>

               {/* <Link to="/" className="brand-logo">PAK COMMODITIES <br/> <div class="sub-heading">FASTEST NEWS UPDATES OF COMMODITIES IN PAKISTAN </div></Link> */}
                
                <ul className="right">
                    {/* <li><i class="large material-icons"><a className="lightTheme" href="#" onClick={toggleTheme}>brightness_4</a></i></li> */}
                    <li><NavLink to="/blog" className="uppernav">BLOG</NavLink></li>
                    <li><NavLink to="/newsRoom" className="uppernav">NEWSROOM</NavLink></li>
                    <li><NavLink to="/signin" className="uppernav">LOGIN</NavLink></li>
                    <li><NavLink to="/logout" className="uppernav">LOGOUT</NavLink></li>
                    <li><NavLink to="/signup" className="uppernav">SIGNUP</NavLink></li>
                    <li><NavLink to="/dashboard" className="uppernav">DASHBOARD</NavLink></li>
                </ul>
               
            </div>
        </nav>
        

    
    )

}

export default Header