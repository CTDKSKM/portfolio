import React from 'react';
import AuroraEffect from '../AuroraEffect';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="w-full h-[600px] bg-black flex justify-center items-center">
      <h3 className="text-5xl font-bold relative overflow-hidden text-white border-none">
        안녕하세요. <br /> 프론트엔드 웹 개발자입니다. <br />
        <AuroraEffect />
      </h3>
    </div>
  );
};

export default Intro;
