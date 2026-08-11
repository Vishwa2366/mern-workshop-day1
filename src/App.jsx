import{BrowserRouter as Router, Routes, Route,Link}from'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Counter from './Counter';

function Add()
{
  return(<div>
     <h1> hello react js</h1>

     <Router>
      <Link to="/Home" > Home</Link>|
      <Link to="/About" > About</Link>|
      <Link to="/Contact" > Contact</Link>|
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Counter" element={<Counter/>} />
      </Routes>
     </Router>
    
  </div>)
}
export default Add;