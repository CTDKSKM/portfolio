import React, { useState } from 'react';
import LeftArrow from '../../static/svgs/LeftArrow';
import { useRecoilState } from 'recoil';
import { itemState } from '../../recoil/itemState';

type Props = {
  data: string[];
};

const SmallNavigationBar = ({ data }: Props) => {
  const [count, setCount] = useRecoilState(itemState);

  const [isNavigationBarOpen, setIsNavigationBarOpen] = useState(false);

  return (
    <div className="sm:hidden relative w-[80px]">
      <div className="flex justify-between cursor-pointer" onClick={() => setIsNavigationBarOpen((prev) => !prev)}>
        <div className="-rotate-90">
          <LeftArrow width={12} height={12} />
        </div>
        <div className="w-[60px]">
          {count === 0 ? (
            'Menu'
          ) : (
            <span
              className="text-blue-400 underline
                  font-bold  cursor-pointer"
            >
              {data[count - 1]?.replaceAll('-', '')}
            </span>
          )}
        </div>
      </div>

      {isNavigationBarOpen && (
        <ul className="overflow-hidden flex flex-col absolute top-6 right-0 bg-white rounded-xl shadow-xl">
          {data.map((item, idx) => {
            return (
              <li key={idx}>
                <button
                  className="w-full px-2 hover:bg-slate-200"
                  onClick={() => {
                    setCount(idx + 1);
                    setIsNavigationBarOpen(false);
                  }}
                >
                  {item?.replaceAll('-', '')}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SmallNavigationBar;
