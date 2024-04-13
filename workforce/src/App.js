import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header'; 
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import About from './Pages/About';
import Register from './Pages/Register';
import Postjob from './Pages/Postjob';
import Job from './Pages/Job';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  

function App() {
  return (
    <div>
    <Router>

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/postjob" element={<Postjob />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/postjob" element={<Postjob />} />
      <Route path="/job" element={<Job />} />
    </Routes>
    </Router>
	  </div>
  );
}

export default App;
