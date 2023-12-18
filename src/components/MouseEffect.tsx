import React, { useEffect, useRef } from 'react';

type Props = {
  deleteFn: (id: number) => void;
  id: number;
  mouseX: number;
  mouseY: number;
  size: number;
};

const delay = 650;

const MouseEffect = ({ id, mouseX, mouseY, size, deleteFn }: Props) => {
  const self = useRef<HTMLDivElement | null>(null);
  const num1 = 190;
  const num2 = 255 - num1;
  const randomR = Math.random() * num1 + num2;
  const randomG = Math.random() * num1 + num2;
  const randomB = Math.random() * num1 + num2;
  const randomA = Math.random() / 2 + 0.5;

  useEffect(() => {
    if (self.current instanceof HTMLDivElement) {
      setTimeout(() => {
        if (!self.current) return;

        self.current.style.boxShadow = `0 0 2px 1px rgba(${randomR},${randomG},${randomB},${(randomA + 1) / 1.5})`;

        self.current.style.opacity = `${(randomA + 1) / 3}`;

        self.current.style.backgroundColor = `rgba(${randomR},${randomG},${randomB},${(randomA + 1) / 2})`;

        self.current.style.transform = `translate(${(randomA - 0.5) * -size + 'px'},${
          (randomA - 0.5) * size + 'px'
        }) scale(${Math.max(2, 2 + ((randomA + 1) / 5 + 0.5))})`;

        setTimeout(() => {
          if (!self.current) return;
          deleteFn(id);
        }, delay + 150);
      }, 45);
    }
  }, []);

  return (
    <div
      ref={self}
      style={{
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        left: mouseX - size / 2 + 'px',
        top: mouseY - size / 2 + 'px',
        backgroundColor: 'transparent',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: `all ${delay / 1000 + 's'} ease-out`,
        filter: 'brightness(1.35)',
        zIndex: '9999'
      }}
    ></div>
  );
};

export default MouseEffect;
