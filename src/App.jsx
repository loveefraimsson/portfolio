import React, { useEffect } from "react";

import './App.css';
import './cssTablet.css';
import './cssDesktop.css';
import './specialMediaQueries.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Project from './components/Project';
import Experience from './components/Experience';
import CV from './components/CV';
import About from './components/About';
import Footer from './components/Footer';

function App() {




  /* TOP ANIMAITON */
  useEffect(() => {

    const hiddenElements = document.querySelectorAll('.hidden')

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })

    hiddenElements.forEach((el) => observer.observe(el))

    }, []);
 

  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <Project />
      <Experience />
      <CV />
      <About />
      <Footer />
    </>
  )
}

export default App
