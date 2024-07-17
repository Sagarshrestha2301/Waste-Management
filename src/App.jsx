import { CiMail } from "react-icons/ci";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Login from "./pages/Login";
import RecyclingForm from './components/RecyclingForm';
import {BrowserRouter, Routes,Route} from "react-router-dom"

import './App.css'

function App() {

  return<>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RecyclingForm" element={<RecyclingForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Login" element={<Login />} />


      </Routes>
      </BrowserRouter>
      <hr />
    </>

}

export default App
