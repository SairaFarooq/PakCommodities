// Header : top of the page
import logopc from '../../../logopc.PNG';
import './Header.css';
import {NavLink, Link} from 'react-router-dom';
const Header = () =>{
    return(
        
        <nav className="nav-wrapper grey lighten-5 topnav">
            <div className="container">

            <a href="/"><img className="logo" src={logopc} alt="LOGO"/></a>

                <Link to="/" className="brand-logo">PAK COMMODITIES <br/> <div class="sub-heading">FASTEST NEWS UPDATES OF COMMODITIES IN PAKISTAN </div></Link>
                
                <ul className="right">
                    <li><NavLink to="/blog" className="uppernav">BLOG</NavLink></li>
                    <li><NavLink to="/news" className="uppernav">NEWSROOM</NavLink></li>
                    <li><NavLink to="/login" className="uppernav">LOGIN</NavLink></li>
                    <li><NavLink to="/logout" className="uppernav">LOGOUT</NavLink></li>
                    <li><NavLink to="/signup" className="uppernav">SIGNUP</NavLink></li>
                </ul>
               
            </div>
        </nav>
        

    
    )

}

export default Header