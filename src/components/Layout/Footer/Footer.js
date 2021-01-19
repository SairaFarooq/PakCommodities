import './Footer.css';
import facebook from '../../../assets/facebook.png';
import twitter from '../../../assets/twitter.png';
import google from '../../../assets/google.png';
import apple from '../../../assets/apple.png';


const Footer = () =>{
  
    return(

        <footer className="page-footer grey darken-1">
          <div className="container">
            <div className="row">
              
              <div className="col l4 s12">
                <h5 className="footerheadings"><b>CONTACT US</b></h5>
                <ul>
                  <li ><b>TELEPHONE : </b>+92 301 5247927</li>
                  <li ><b>EMAIL : </b>pakcommodities92@mail.com</li>
                </ul>
                
              </div>

              <div className="col l6 s12">
                <h1></h1>
                <ul className="col l4">
                  <li><a className="footer-subLinks" href="#!">TERMS OF SERVICES</a></li>
                  <li><a className="footer-subLinks" href="#!">RESEARCH</a></li>
                </ul>

                <a className="footer-logo" href="https://play.google.com/store/apps/details?id=apppakcommoditiescom.wpapp" target="_blank"><img className="app-icon" src={google}/></a>
                <a className="footer-logo" href="https://apps.apple.com/pk/app/pakcommodities/id1513414534" target="_blank"><img className="app-icon" src={apple}/></a>
              
              </div>

      
              <div className="col l2 s12 ">
                <h5 className="footerheadings"><b>FOLLOW US</b></h5>
                <a className="footer-logo" href="https://web.facebook.com/PAKCOMMARKET" target="_blank"><img className="social-icon" src={facebook}/></a>
                <a className="footer-logo" href="https://twitter.com/pakcommodities1" target="_blank"><img className="social-icon" src={twitter}/></a>
              </div>

            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made with ♥ in Pakistan © 2021. All rights reserved.
            
            </div>
          </div>
        </footer>
        
    )
}

export default Footer


