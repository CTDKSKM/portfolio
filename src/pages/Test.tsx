import React, { useState } from 'react';
import About from '../components/Home/About';
import Skills from '../components/Home/Skills';

const Test = () => {
  const [activeItem, setActiveItem] = useState('aboutMe'); // 활성화된 아이템 상태

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li
            className={`cursor-pointer ${activeItem === 'aboutMe' ? 'font-bold' : ''}`}
            onClick={() => handleClick('aboutMe')}
          >
            AboutMe
          </li>
          <li
            className={`cursor-pointer ${activeItem === 'skills' ? 'font-bold' : ''}`}
            onClick={() => handleClick('skills')}
          >
            Skills
          </li>
          <li
            className={`cursor-pointer ${activeItem === 'projects' ? 'font-bold' : ''}`}
            onClick={() => handleClick('projects')}
          >
            Projects
          </li>
        </ul>
      </nav>

      <div className="flex-1 p-4">
        {activeItem === 'aboutMe' && (
          <div className="transition-transform transform -translate-y-full">
            {/* About Me 컴포넌트 */}
            <h2>About Me</h2>
            {/* 내용 추가 */}
            {/* <About /> */}
          </div>
        )}
        {activeItem === 'skills' && (
          <div className="transition-transform transform -translate-y-full">
            {/* Skills 컴포넌트 */}
            <h2>Skills</h2>
            {/* 내용 추가 */}
            <Skills />
          </div>
        )}
        {activeItem === 'projects' && (
          <div className="transition-transform transform -translate-y-full">
            {/* Projects 컴포넌트 */}
            <h2>Projects</h2>
            {/* 내용 추가 */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
