import React, { useEffect } from "react";

function Nav(props) {
  const {
      sections = [],
      setCurrentSection,
      currentSection,
  } = props;

  useEffect(() => {
    document.title = currentSection.name;
}, [currentSection]); 

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          All Day Construction
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          {sections.map((section) => (
            <li className={`mx-1 ${
                currentSection === section && 'navActive'
                }`} 
                key={section}>
              <span
                onClick={() => {
                  setCurrentSection(section);
                }}
              >
                {section}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;