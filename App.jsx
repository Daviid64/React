import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Footer from"./components/Footer"
import Navbar from './components/Navbar'
import About from "./pages/About"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Carousel from './components/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
 
  return (
    
    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
    <Footer />
    </Router>  
   
  );
}

export default App;
