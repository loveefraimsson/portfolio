import './App.css';
import './cssTablet.css';
import './cssDesktop.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Project from './components/Project';
import Experience from './components/Experience';
import CV from './components/CV';
import About from './components/About';
import Footer from './components/Footer';

function App() {
 

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
