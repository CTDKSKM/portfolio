import React, { useState, useEffect, useRef } from 'react';
import ArrowUp from '../../static/images/arrow-up.svg';
import { scrollToTop } from '../../utils/scrollUtils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const arrowRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // 스크롤 이벤트를 추가하여 버튼 표시 여부를 업데이트
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너를 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const transArrow = (action: string) => {
    if (arrowRef.current instanceof HTMLImageElement) {
      if (action === 'in') {
        arrowRef.current.style.transform = 'translateY(-2px) scale(1.1)';
      } else {
        arrowRef.current.style.transform = 'none';
      }
    }
  };
  return (
    <button
      className={`fixed w-10 h-10 bottom-20 right-20 p-2 shadow-md shadow-white rounded-full cursor-pointer ${
        isVisible ? 'block' : 'hidden'
      } hover:shadow-black hover:shadow-inner hover:bg-white transition-all duration-75 ease`}
      onClick={scrollToTop}
      onMouseEnter={() => transArrow('in')}
      onMouseLeave={() => transArrow('out')}
    >
      <img
        ref={arrowRef}
        src={ArrowUp}
        alt=""
        width={24}
        height={24}
        className="opacity-70 transition-all duration-300"
      />
    </button>
  );
};

export default ScrollToTopButton;
