import {useState, useEffect} from 'react';
import './Navbar.css';
import {getAllCategories} from '../../../services/category.service';



const Navbar = () =>{
    const [allCategories, setAllCategories] = useState([]);

    useEffect(() => {

         async function getCategories(){
            let mounted = true;
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            const response = await getAllCategories(requestOptions);
            const res = await response.json();
            console.log("Response ", res);
        
             var categories = [];
            for(let item of res){
                if(mounted){
                    categories.push(item)
                }
            }

            setAllCategories(categories)

            return () => mounted = false;
        }

        getCategories();
      }, [])
      
      console.log("Items of categories === ", setAllCategories);
    return(
        <nav className="nav-wrapper teal accent-4">
            <div className="container">
                <ul className="navbar">
                    {allCategories.map(category => 

                        <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='pulsesDropDown'>{category.categoryNameEng} ({category.categoryNameUrdu})<i className="material-icons right">arrow_drop_down</i></a></li>                       
                    )}
                     {/* <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='pulsesDropDown'>PULSES<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='grainsDropDown'>GRAINS<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='fodderSeedsDropDown'>FODDER SEEDS<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='spicesDropDown'>SPICES<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='sugarDropDown'>SUGAR/GUR<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='guarDropDown'>GUAR<i className="material-icons right">arrow_drop_down</i></a></li>
                    <li className="navbarLinks"><a className='dropdown-button btn teal accent-4 categories' data-beloworigin="true" href='#' data-activates='oilSeedsDropDown'>OIL SEEDS<i className="material-icons right">arrow_drop_down</i></a></li>  */}
                   
                    <li className="navbarLinks"><a className='btn teal accent-4 categories'  href='/historicalRates'>HISTORICAL RATES</a></li>

                </ul>

                 {/*  Dropdown Structure */}
                <ul id="pulsesDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Desi Chickpeas</a></li>
                    <li><a href="#!">Kabuli ChickPeas</a></li>
                    <li><a href="#!">Black matpe</a></li>
                    <li><a href="#!">Lentil</a></li>
                    <li><a href="#!">Moong Beans</a></li>
                    <li><a href="#!">Mooth Beans</a></li>
                    <li><a href="#!">Yellow Peas</a></li>
                </ul> 

                <ul id="grainsDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Oats</a></li>
                    <li><a href="#!">Wheat</a></li>
                    <li><a href="#!">Maize</a></li>
                    <li><a href="#!">Millet</a></li>
                    <li><a href="#!">Sorghum</a></li>
                </ul> 

                <ul id="fodderSeedsDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Clover Seeds</a></li>
                    <li><a href="#!">Alfalfa Seeds</a></li>
                    <li><a href="#!">Sorghum Seeds</a></li>
                    <li><a href="#!">Susbania Seeds</a></li>
                    <li><a href="#!">Maize Fodder Quality</a></li>
                </ul> 

                <ul id="spicesDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Red Chilli</a></li>
                    <li><a href="#!">Turmeric</a></li>
                    <li><a href="#!">Corrainder</a></li>
                    <li><a href="#!">Cumin Seeds</a></li>
                </ul>
                
                <ul id="sugarDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Sugar</a></li>
                    <li><a href="#!">Gur</a></li>
                </ul>

                <ul id="guarDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Guar Seeds</a></li>
                </ul>

                <ul id="oilSeedsDropDown" className="dropdown-content teal accent-4">
                    <li><a href="#!">Mustard Seed</a></li>
                    <li><a href="#!">Bitter Mustard</a></li>
                    <li><a href="#!">Sunflower</a></li>
                    <li><a href="#!">Sesame Seed</a></li>
                    <li><a href="#!">Castor Seed</a></li>
                </ul> 

            </div>
        </nav>
    )

}

export default Navbar