import React from 'react'
import './App.css'
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Skills from "./components/Skills/Skills.js";
import Services from "./components/Services/Services.js";
import Qualification from "./components/Qualification/Qualification.js";
import Work from "./components/Work/Work.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Scrollup from "./components/Scrollup/Scrollup.js";
const App = () => {
  return (
    <>
    <Header/>

    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualification/>
      <Work/>
      <Testimonials/>
      <Contact/>
      
    </main>
    <Footer/>
    <Scrollup/>
    </>
  )
}

export default App