import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Why from './components/Why';
import Benefits from './components/Benefits';
import How from './components/How';
import Technology from './components/Technology';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import { BsFillArrowUpCircleFill } from "react-icons/bs";


function App() {
const top = () => {
  window.scrollTo(0,0);
}

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Why/>
      <Benefits/>
      <How/>
      <Technology/>
      <Blog/>
      <Contact/>
      <Footer/>
      <BsFillArrowUpCircleFill onClick={top} className='topbtn'/>
    </div>
  );
}

export default App;
