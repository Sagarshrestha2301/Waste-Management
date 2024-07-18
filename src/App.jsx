import { CiMail } from "react-icons/ci";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import RecyclingForm from './components/RecyclingForm';
import Login from "../../Waste-Management/src/components/Login/Login";
import Register from "../../Waste-Management/src/components/Login/Register"
import Dashboard from './components/Dashboard/Home';



import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./components/Dashboard/Home";

function App() {

  return<>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/RecyclingForm" element={<RecyclingForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Home />} />
        

     
      </Routes>
    </>

}

export default App
