import React from 'react';
import { useRecoilState } from 'recoil';
import { itemState } from '../../recoil/itemState';
import ButterflyPointer from '../ButterflyPointer';

type Props = {
  data: string[];
};

const LargeNavigationBar = ({ data }: Props) => {
  const [count, setCount] = useRecoilState(itemState);

  return (
    <ul className="hidden sm:flex space-x-4">
      {data.map((item, idx) => {
        return (
          <li key={item} className="relative">
            <button
              onClick={() => {
                setCount(idx + 1);
              }}
              className={`${
                idx === count - 1 ? 'text-blue-400 underline' : 'hover:text-blue-400 hover:underline'
              } font-bold  cursor-pointer`}
            >
              {item.replace('-', '')}
            </button>
            {idx === count - 1 && (
              <div className="absolute -top-2 -left-2">
                <ButterflyPointer size={12} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default LargeNavigationBar;
