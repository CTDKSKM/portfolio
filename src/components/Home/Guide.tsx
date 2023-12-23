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
  const decreseViewCount = () => {
    setViewCount((prev) => prev - 1);
  };
  useEffect(() => {
    if (viewCount > 4) {
      window.localStorage.setItem('isGuideCompleted', 'true');
      close();
    }
  }, [viewCount]);

  return (
    <>
      <div className="absolute top-0 left-0 w-[100vw] h-[100vh] z-50 bg-black opacity-80 text-4xl font-bold">
        {viewCount === 3 && (
          <button
            className="absolute w-1/2 h-4/5 border left-1/2 top-1/2 -translate-y-1/2 bg-slate-500 animate-pulse"
            onClick={() => {
              increaseItemCount();
              addViewCount();
            }}
          >
            Click
          </button>
        )}
        {viewCount === 4 && (
          <button
            className="absolute w-1/2 h-4/5 border left-0 top-1/2 -translate-y-1/2 bg-slate-500 animate-pulse z-10"
            onClick={() => {
              decreaseItemCount();
              addViewCount();
            }}
          >
            Click
          </button>
        )}
      </div>
      {viewCount < 3 && (
        <div
          className={`z-50 absolute w-[300px] h-[300px] opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            viewCount < 3 && 'bg-white shadow-md shadow-white'
          } w-1/2 h-1/2 opacity-100  rounded-2xl`}
        >
          <div className="p-2 font-bold flex justify-center items-center w-full h-full transition-all duration-300">
            {viewCount === 1 && <p>방문해주셔서 감사합니다. </p>}
            {viewCount === 2 && <p>간단한 마우스 클릭이나 휠 움직임으로 포트폴리오를 감상하실 수 있습니다. </p>}
          </div>
          {viewCount < 3 && (
            <>
              <button
                className="absolute top-5 right-5 px-3 py-1 rounded-full bg-slate-300 animate-pulse"
                onClick={() => {
                  addViewCount();
                }}
              >
                Next
              </button>
            </>
          )}
          {viewCount > 1 && viewCount < 3 && (
            <button
              className="absolute top-5 left-5 px-3 py-1 rounded-full bg-slate-300 animate-pulse"
              onClick={() => {
                decreseViewCount();
              }}
            >
              Prev
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Guide;
