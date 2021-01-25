// import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddItem from './components/Dashboard/AddItem';
import AddLocation from './components/Dashboard/AddLocation';
import AddRate from './components/Dashboard/AddRate';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />
        <Navbar />

        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path ="/signin" component={SignIn}/>
            <Route path ="/signup" component={SignUp}/>
            <Route path ="/dashboard" component={Dashboard} />
            <Route path ="/addItem" component={AddItem} />
            <Route path ="/addLocation" component={AddLocation} />
            <Route path ="/addRate" component={AddRate} />
          

        </Switch>

        
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
