// Main application component with routing.

import React, { useState } from 'react'; // Import useState
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <Header toggleDarkMode={toggleDarkMode} />

      <Routes>
        <Route path="/" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;