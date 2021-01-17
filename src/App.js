// import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Header from './components/Layout/Header/Header';
import 'materialize-css/dist/css/materialize.min.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
