import { SVGProps } from 'react';
const LeftArrowFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ pointerEvents: 'none' }}
  >
    <path d="M3 7.5L11 0V15L3 7.5Z" fill="#000000" />
  </svg>
);
export default LeftArrowFull;
