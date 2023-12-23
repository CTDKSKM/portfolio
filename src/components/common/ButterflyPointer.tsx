import React from 'react';

type Props = {
  size?: number;
};

const ButterflyPointer = ({ size = 24 }: Props) => {
  return (
    <div
      style={{ transition: 'transform 0.3s ease' }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'rotate(-25deg)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'rotate(0deg)')}
    >
      <img src={process.env.PUBLIC_URL + '/linkbutterfly.svg'} alt="lightning" width={size} height={size} />
    </div>
  );
};

export default ButterflyPointer;
