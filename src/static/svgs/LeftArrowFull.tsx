import { SVGProps } from 'react';

const LeftArrowFull = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="32px" height="32px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path className="transition-all duration-300 fill-black hover:fill-gray-500" d="M3 7.5L11 0V15L3 7.5Z" />
    </svg>
  );
};

export default LeftArrowFull;
