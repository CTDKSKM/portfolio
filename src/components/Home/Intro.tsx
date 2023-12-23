import React from 'react';
import AuroraEffect from '../common/AuroraEffect';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="w-full h-[600px] my-auto bg-black flex justify-center items-center">
      <h3 className="flex gap-3 flex-col justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold relative overflow-hidden text-white border-none">
        <p>안녕하세요.</p>
        <p>프론트엔드 웹 개발자</p>
        <p>서경모입니다.</p>
        <br />
        <br />
        <p>방문해 주셔서 감사합니다.</p>
        <AuroraEffect />
      </h3>
    </div>
  );
};

export default Intro;
