<<<<<<< HEAD
// src/App.js

import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services/Services";

// Components
import RecyclingForm from './components/RecyclingForm';
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Dashboard from './components/Dashboard/Dashboard';

// Styles
import './App.css';

// Auth
import { isUserLoggedIn } from './utils/auth';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  return isUserLoggedIn() ? children : <Navigate to="/Login" replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={
        isUserLoggedIn() ? <Navigate to="/Login" replace /> : <Navigate to="/Dashboard" replace />
      } />
      <Route path="/Login" element={
        isUserLoggedIn() ? <Navigate to="/Dashboard" replace /> : <Login />
      } />
      <Route path="/Register" element={<Register />} />
      <Route path="/Dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/RecyclingForm" element={
        <ProtectedRoute>
          <RecyclingForm />
        </ProtectedRoute>
      } />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
=======
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import RecyclingForm from "./components/RecyclingForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RecyclingForm" element={<RecyclingForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          

        </Routes>
      </BrowserRouter>
      <hr />
    </>
  );
}

export default App;
>>>>>>> 09c991903e72eb49457a42604e5709115422110e
