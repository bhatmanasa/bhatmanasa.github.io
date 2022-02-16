import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { BrowserRouter as Router,Link, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <main className="text-black-400 bg-white body-font">
      {/* <Navbar />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Experience />
      <Contact /> */}
      <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<About/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
            </div>
          </Router>
    </main>
  );
}