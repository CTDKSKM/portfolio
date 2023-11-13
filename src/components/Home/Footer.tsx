import React from 'react';
import { AiFillGithub, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import { SiTistory } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 h-[200px]">
      <div className="container mx-auto my-10 flex flex-col items-center justify-center">
        <div className="flex space-x-4 my-3">
          <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="w-[50px] h-[50px] footerIcon mx-1" />
          </a>
          <a href="https://your-tistory-url" target="_blank" rel="noopener noreferrer">
            <SiTistory className="w-[40px] h-[40px] footerIcon mt-2  mx-1" />
          </a>
          <a href="https://your-instagram-url" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram className="w-[60px] h-[60px] footerIcon  mx-1" />
          </a>
          <a href="https://your-facebook-url" target="_blank" rel="noopener noreferrer">
            <AiOutlineFacebook className="w-[60px] h-[60px] footerIcon " />
          </a>
        </div>
        <p>© 2021. Hong Gil Dong. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
