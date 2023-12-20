import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { itemState } from '../../recoil/itemState';
import AuroraEffect from '../AuroraEffect';
import ButterflyPointer from '../ButterflyPointer';

type Props = {};

const navItem = ['About-Me', 'Skills', 'Archiving', 'Projects'];

const Header = (props: Props) => {
  const [count, setCount] = useRecoilState(itemState);
  const [isLogoHovering, setIsLogoHovering] = useState(false);

  return (
    <header id="header" className="bg-transparent p-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className={`relative text-2xl font-bold`}>
          <button
            className={`relative overflow-hidden flex justify-center items-center
              bg-black text-white px-3 pb-1 rounded-full
            `}
            onClick={() => setCount(0)}
            onMouseEnter={() => setIsLogoHovering(true)}
            onMouseLeave={() => setIsLogoHovering(false)}
          >
            SKM's Portfolio
            {(count === 0 || isLogoHovering) && <AuroraEffect />}
          </button>
          {count === 0 && (
            <div className="absolute -top-3 -left-3">
              <ButterflyPointer />
            </div>
          )}
        </div>

        <ul className="flex space-x-4">
          {navItem.map((item, idx) => {
            return (
              <li key={item} className="relative">
                <button
                  // onClick={() => scrollToSection(`${item.toLowerCase()}`)}
                  onClick={() => {
                    setCount(idx + 1);
                  }}
                  className={`${
                    idx === count - 1 ? 'text-blue-400 underline' : 'hover:text-blue-400 hover:underline'
                  } font-bold  cursor-pointer`}
                >
                  {item.replace('-', '')}
                </button>
                {idx === count - 1 && (
                  <div className="absolute -top-2 -left-2">
                    <ButterflyPointer size={12} />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
