import './App.css';
import Objective from './Components/Objective';
import Features from './Components/Features';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Objective/>
     <Features/>
     <AboutUs/>
    </div>
  );
}

export default App;
