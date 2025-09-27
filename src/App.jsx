import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import Tutorial from './pages/Tutorial';
import Pp from './pages/Pp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-background"></div>
        <div className="app-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/privacy" element={<Pp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;