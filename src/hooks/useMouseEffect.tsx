import React, { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

const useMouseEffect = () => {
  const delay = 80;
  const keyMode = false;
  const [mouseEffects, setMouseEffects] = useState<Map<number, { id: number; size: number; x: number; y: number }>>(
    new Map()
  );
  const [isMoving, setIsMoving] = useState(true);
  const [clientValue, setClientValue] = useState({ x: 0, y: 0 });
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [scrollValue, setScrollValue] = useState({ x: window.scrollX, y: window.scrollY });

  const deleteEffect = (id: number) => {
    setMouseEffects((state) => {
      const newState = new Map(state);
      newState.delete(id);
      return newState;
    });
  };

  const createFadeOutEffectDiv = throttle((x: number, y: number, speed: number) => {
    setMouseEffects((prevEffects) => {
      const newEffects = new Map(prevEffects);
      const newFadeOutDiv = {
        id: Math.random() + x + y,
        size: Math.min(10, 5 + speed),
        x,
        y
      };
      newEffects.set(newFadeOutDiv.id, newFadeOutDiv);
      return newEffects;
    });
  }, 15);

  const handleMousemove = (event: MouseEvent) => {
    setIsMoving(true);

    const locationX = window.scrollX + event.clientX;
    const locationY = window.scrollY + event.clientY;
    setClientValue({ x: event.clientX, y: event.clientY });
    const speed = Math.sqrt(Math.pow(event.movementX, 2) + Math.pow(event.movementY, 2));

    // 새로운 요소 생성
    createFadeOutEffectDiv(locationX, locationY, speed);

    setTimeout(() => {
      setIsMoving(false);
    }, delay);
  };

  const handleScrollMove = () => {
    const x = window.scrollX;
    const y = window.scrollY;
    setScrollValue({ x, y });
  };

  useEffect(() => {
    let blockNesting = false;
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 's') {
        if (blockNesting) return;

        addMouseEffect();
        blockNesting = true;
      } else if (event.key === 'e') {
        removeMouseEffect();
        blockNesting = false;
      }
    };

    const addMouseEffect = () => {
      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('scroll', handleScrollMove);
    };

    const removeMouseEffect = () => {
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('scroll', handleScrollMove);
      setMouseEffects(new Map());

      setTimeout(
        () =>
          setIntervalId((prev) => {
            if (prev !== null) clearInterval(prev);
            return prev;
          }),
        delay
      );
    };
    if (keyMode) {
      document.addEventListener('keyup', handleKeyUp);
    } else addMouseEffect();

    return () => {
      if (keyMode) document.removeEventListener('keyup', handleKeyUp);
      removeMouseEffect();
    };
  }, []);

  //움직임 없을 때 자동생성
  useEffect(() => {
    if (!isMoving) {
      if (intervalId !== null) clearInterval(intervalId);
      setIntervalId(
        setInterval(() => {
          createFadeOutEffectDiv(scrollValue.x + clientValue.x, scrollValue.y + clientValue.y, Math.random());
        }, delay)
      );
    } else {
      if (intervalId !== null) clearInterval(intervalId);
    }
  }, [isMoving, scrollValue]);

  return { mouseEffects, deleteEffect };
};

export default useMouseEffect;
