import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
    return(
        <nav className="nav-wrapper grey darken-3">
            {/*  Dropdown Structure */} 
            <ul id="pulsesDropdown" className="dropdown-content grey darken-3">
                <li><a href="#!">Desi Chickpeas</a></li>
                <li><a href="#!">Kabuli ChickPeas</a></li>
                <li><a href="#!">Black matpe</a></li>
                <li><a href="#!">Lentil</a></li>
                <li><a href="#!">Moong Beans</a></li>
                <li><a href="#!">Mooth Beans</a></li>
                <li><a href="#!">Yellow Peas</a></li>
            </ul>


            <div className="container">

                <ul>
               
                <li><a class="categories dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
                   
                   <li><a href ="/pulses" className="categories btn dropdown-button" data-activates="dropdown1" >PULSES<i class="material-icons right">arrow_drop_down</i></a></li>
                   <li><NavLink to ="/grains" className="categories">GRAINS<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                   <li><NavLink to ="/fodderseeds"className="categories">FODDER SEEDS<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                   <li><NavLink to ="/spices" className="categories">SPICES<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                   <li><NavLink to ="/sugar" className="categories">SUGAR/GUR<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                   <li><NavLink to ="/guar"className="categories">GUAR<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                   <li><NavLink to ="/oilseeds" className="categories">OIL SEEDS<i class="material-icons right">arrow_drop_down</i></NavLink></li>
                   <li>
                       <form>
                            <div class="input-field">
                                <input id="search" type="search" required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
                         </form>
                        
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar