import React, { useEffect, useState } from 'react';
import useItemCount from '../../hooks/useItemCount';

type Props = {
  close: () => void;
};

const Guide = ({ close }: Props) => {
  const [viewCount, setViewCount] = useState(1);
  const [increaseItemCount, decreaseItemCount] = useItemCount();

  const addViewCount = () => {
    setViewCount((prev) => prev + 1);
  };
  useEffect(() => {
    if (viewCount > 4) close();
  }, [viewCount]);

  return (
    <>
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] z-50 bg-black opacity-80">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            viewCount < 3 && 'bg-white'
          } w-1/2 h-1/2`}
        >
          <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300">
            {viewCount === 1 && <p>방문해주셔서 감사합니다. </p>}
            {viewCount === 2 && <p>간단한 마우스 클릭이나 휠 움직임으로 포트폴리오를 감상하실 수 있습니다. </p>}
          </div>
          {viewCount < 3 && (
            <button
              className="absolute top-5 right-5"
              onClick={() => {
                addViewCount();
              }}
            >
              Click''
            </button>
          )}
        </div>

        {viewCount === 3 && (
          <button
            className="absolute w-1/2 h-4/5 border left-1/2 top-1/2 -translate-y-1/2 bg-slate-200 animate-pulse"
            onClick={() => {
              increaseItemCount();
              addViewCount();
            }}
          ></button>
        )}
        {viewCount === 4 && (
          <button
            className="absolute w-1/2 h-4/5 border left-0 top-1/2 -translate-y-1/2 bg-slate-200 animate-pulse"
            onClick={() => {
              decreaseItemCount();
              addViewCount();
            }}
          ></button>
        )}
        {viewCount > 4 && <div></div>}
      </div>
    </>
  );
};

export default Guide;
