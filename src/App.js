import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import HTMLProject from './pages/RProject';
import NotebookProject from './pages/NotebookProject';
import RegressionProject from './pages/RegressionProject';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/html-project" element={<HTMLProject />} />
        <Route path="/notebook-project" element={<NotebookProject />} />
        <Route path="/regression-project" element={<RegressionProject />} />
      </Routes>
    </div>
  </Router>
);

export default App;
