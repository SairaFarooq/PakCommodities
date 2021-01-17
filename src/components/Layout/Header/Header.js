// Header : top of the page
import logopc from '../../../logopc.PNG';
import './Header.css';
const Header = () =>{
    return(
        <div className= "wrapper">
            <div className = "header-content">
                {/*  logo div*/}
                <div className="logo-wrapper s-4">
                    <a href="/">
                        <img className="logo" src={logopc} alt="LOGO"/>
                    </a>
                </div>

                {/*  Header content*/}
                <div className="header-right-content">
                    This is header=content

                </div>

            </div>
            <h1>Header : Pak Commodities</h1>
        </div>
    )

}

export default Header