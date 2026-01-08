// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import AppProjects from "./component/AppProjects";


export default function App() {
  return (
    <Router>
      <div className="font-poppins bg-gradient-to-b from-[#0b021a] via-[#12052b] to-[#090114] text-white min-h-screen">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <AppProjects />
                <Contact />
              </>
            }
          />


        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
