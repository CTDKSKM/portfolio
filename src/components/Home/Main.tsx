import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { itemState } from '../../recoil/itemState';
import useItemCount from '../../hooks/useItemCount';
import { MAIN_ITEMS } from '../../static/mainItems';

type Props = {};

const Main = (props: Props) => {
  const mainRef = useRef<HTMLElement | null>(null);
  const count = useRecoilValue(itemState);
  const [increaseItemCount, decreaseItemCount] = useItemCount();

  useEffect(() => {
    if (mainRef.current instanceof HTMLElement) {
      mainRef.current.style.transform = `translate(-${count * 100}vw)`;
    }
  }, [count]);

  useEffect(() => {
    const handleClickCount = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        const targetTagName = event.target.tagName.toUpperCase();
        if (['BUTTON', 'A', 'IFRAME', 'VIDEO'].includes(targetTagName)) return;
      }

      if (event.clientX >= (window.innerWidth / 5) * 3) {
        increaseItemCount();
      } else if (event.clientX <= (window.innerWidth / 5) * 2) {
        decreaseItemCount();
      }
    };
    const handleScrollCount = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        increaseItemCount();
      } else {
        decreaseItemCount();
      }
    };
    if (mainRef.current instanceof HTMLElement) {
      mainRef.current.addEventListener('click', handleClickCount);
      mainRef.current.addEventListener('wheel', handleScrollCount);
    }

    return () => {
      if (mainRef.current instanceof HTMLElement) {
        mainRef.current.removeEventListener('click', handleClickCount);
        mainRef.current.removeEventListener('wheel', handleScrollCount);
      }
    };
  }, [count]);

  return (
    <>
      <main
        ref={mainRef}
        className="relative flex items-center w-[500vw] h-[100vh] overflow-hidden transition-transform duration-300"
      >
        {MAIN_ITEMS.map((item, idx) => {
          return (
            <div key={idx} className="w-1/5">
              {item}
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Main;
