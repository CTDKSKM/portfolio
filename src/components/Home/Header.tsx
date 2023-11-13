import React, { useState, useEffect, CSSProperties } from 'react';
import { scrollToSection } from '../../utils/scrollUtils';
import { scrollToTop } from '../../utils/scrollUtils';

type Props = {};

const navItem = ['About-Me', 'Skills', 'Archiving', 'Projects'];

const Header = (props: Props) => {
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;

    if (position > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle: CSSProperties = {
    color: 'white',
    transition: 'all 0.3s'
  };

  if (showBackground) {
    headerStyle.backgroundColor = 'white';
    headerStyle.color = 'black';
  }

  return (
    <header id="header" style={headerStyle} className="bg-transparent p-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className={`text-2xl font-bold`}>
          <button onClick={scrollToTop}>My Portfolio</button>
        </div>

        <ul className="flex space-x-4">
          {navItem.map((item) => {
            return (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(`${item.toLowerCase()}`)}
                  className="hover:text-blue-400 hover:underline font-bold  cursor-pointer"
                >
                  {item.replace('-', '')}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
