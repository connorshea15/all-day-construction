import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';

function App() {

  // I am just going to have contact shoot me down to the bottom of the page where the contact info is
  const [sections] = useState(['Home', 'About Us', 'Portfolio', 'Contact']);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="App">
      <Nav
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Nav>
    </div>
  );
}

export default App;
