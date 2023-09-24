import './App.css';
import Home from './components/Home';
import Why from './components/Why';
import Benefits from './components/Benefits';
import How from './components/How';
import Technology from './components/Technology';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Why/>
      <Benefits/>
      <How/>
      <Technology/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
