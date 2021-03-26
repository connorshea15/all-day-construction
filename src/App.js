import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {

  // I am just going to have contact shoot me down to the bottom of the page where the contact info is
  const [sections] = useState(['About Us', 'Portfolio', 'Contact']);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="App">
      <div className="border">
      <div className="hero">
        <Nav
          sections={sections}
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        ></Nav>
      </div>

      <main>
        {currentSection === 'About Us' ? (
          <About></About>
          
        ) : currentSection === 'Portfolio' ? (
          <Portfolio></Portfolio>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
