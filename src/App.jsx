import { useState } from 'react';
import './App.css';
import CV from './Love_Efraimsson_CV.pdf'

function App() {
 

  return (
    <>
      <h1>Portfolio</h1>
      <a href = {CV} target = "_blank">Download Pdf</a>
    </>
  )
}

export default App
