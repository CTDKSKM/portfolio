import React from 'react';
import AuroraEffect from '../AuroraEffect';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="w-full h-[600px] bg-black flex justify-center items-center">
      <h3 className="text-5xl font-bold relative overflow-hidden text-white border-none">
        안녕하세요
        <AuroraEffect />
      </h3>
    </div>
  );
};

export default Intro;
