// import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import HistoricalRates from './components/Home/HistoricalRates';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddProduct from './components/Dashboard/AddProduct';
import AddLocation from './components/Dashboard/AddLocation';
import AddRate from './components/Dashboard/AddRate';
import AddBlog from './components/Dashboard/AddBlog';
import AddCategory from './components/Dashboard/AddCategory';
import Notifications from './components/Dashboard/Notifications';
import ThemeContextProvider from './context/ThemeContext';
import { TermsOfService } from './components/Others/TermsOfService';
import { NewsRoom } from './components/Others/NewsRoom';
import Users from './components/Dashboard/Users';
import AddPlan from './components/Dashboard/AddPlan';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <ThemeContextProvider>
        <Header />
        <Navbar />

        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/signin" component={SignIn}/>
            <Route path ="/signup" component={SignUp}/>

            {/* Admin dashboard */}
            <Route path ="/dashboard" component={Dashboard} />
            <Route path ="/notifications" component={Notifications} />
            <Route path ="/addPlan" component={AddPlan} />
            <Route path ="/addCategory" component={AddCategory} />
            <Route path ="/addProduct" component={AddProduct} />
            <Route path ="/addLocation" component={AddLocation} />
            <Route path ="/addRate" component={AddRate} />
            <Route path ="/addBlog" component={AddBlog} />
            <Route path ="/users" component={Users} />

            {/* All users */}
            <Route path ="/historicalRates" component={HistoricalRates} />
            <Route path ="/termsOfService" component={TermsOfService} />
            <Route path ="/newsRoom" component={NewsRoom} />
            
          

        </Switch>

        </ThemeContextProvider>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
