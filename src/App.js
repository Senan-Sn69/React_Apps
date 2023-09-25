import './App.css';
import { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
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
import Partners from './components/Partners';


function App() {
const [loading, setLoading] = useState(false)
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)

},5000)

},[])

const top = () => {
  window.scrollTo(0,0);
}

  return (
    <div className="loading">
      {
      loading ?
        <HashLoader color={'#36a5d6'} loading={loading} size={150} />
        :
        <div className="App">
          <Navbar/>
          <Home/>
          <About/>
          <Why/>
          <Benefits/>
          <How/>
          <Technology/>
          <Partners/>
          <Blog/>
          <Contact/>
          <Footer/>
          <BsFillArrowUpCircleFill onClick={top} className='topbtn'/>
          </div>
      }
    </div>
  );
}

export default App;
