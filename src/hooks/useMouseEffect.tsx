import React, { useState, useEffect } from 'react';

const useMouseEffect = () => {
  const [mouseEffects, setMouseEffects] = useState<Map<number, { id: number; size: number; x: number; y: number }>>(
    new Map()
  );

  const deleteEffect = (id: number) => {
    setMouseEffects((state) => {
      const newState = new Map(state);
      newState.delete(id);
      return newState;
    });
  };

  useEffect(() => {
    let blockNesting = false;

    const handleStart = (event: KeyboardEvent) => {
      if (event.key === 's') {
        if (blockNesting) return;

        addMouseEffect();

        blockNesting = true;
      } else if (event.key === 'e') {
        if (!blockNesting) return;

        removeMouseEffect();
        setMouseEffects(new Map());
        blockNesting = false;
      }
    };

    const handleMousemove = (event: MouseEvent) => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const speed = Math.sqrt(Math.pow(event.movementX, 2) + Math.pow(event.movementY, 2));

      // 새로운 요소 생성
      createFadeOutDiv(mouseX + scrollX, mouseY + scrollY, speed);
    };

    const createFadeOutDiv = (x: number, y: number, speed: number) => {
      const newFadeOutDiv = {
        id: Math.random() + x + y + speed,
        size: Math.min(15, 5 + speed / 2),
        x,
        y
      };

      setMouseEffects((state) => {
        const newState = new Map(state);
        newState.set(newFadeOutDiv.id, newFadeOutDiv);
        return newState;
      });
    };

    const addMouseEffect = () => {
      document.addEventListener('mousemove', handleMousemove);
      document.addEventListener('click', handleMousemove);
    };

    const removeMouseEffect = () => {
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('click', handleMousemove);
    };

    document.addEventListener('keyup', handleStart);

    return () => {
      document.removeEventListener('keyup', handleStart);
      removeMouseEffect();
    };
  }, []);

  return { mouseEffects, deleteEffect };
};

export default useMouseEffect;
