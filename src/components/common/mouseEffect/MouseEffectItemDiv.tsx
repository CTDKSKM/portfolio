import React, { useEffect, useRef } from 'react';

type Props = {
  deleteFn: (id: number) => void;
  id: number;
  mouseX: number;
  mouseY: number;
  size: number;
};

const delay = 650;

const MouseEffectItemDiv = ({ id, mouseX, mouseY, size, deleteFn }: Props) => {
  const self = useRef<HTMLDivElement | null>(null);
  const num1 = 190;
  const num2 = 255 - num1;
  const randomR = Math.random() * num1 + num2;
  const randomG = Math.random() * num1 + num2;
  const randomB = Math.random() * num1 + num2;
  const randomA = Math.random() / 2 + 0.3;

  useEffect(() => {
    if (self.current instanceof HTMLDivElement) {
      setTimeout(() => {
        if (!self.current) return;

        self.current.style.boxShadow = `0 0 2px 1px rgba(${randomR},${randomG},${randomB},${(randomA + 1) / 1.5})`;

        self.current.style.opacity = `${(randomA + 1) / 3}`;

        self.current.style.backgroundColor = `rgba(${randomR},${randomG},${randomB},${(randomA + 1) / 2})`;

        self.current.style.transform = `translate(${-randomA + 'px'},${randomA + 'px'}) scale(${
          1.5 + size / 6
        }) rotate(${Math.random() * 360}deg)`;

        setTimeout(() => {
          if (!self.current) return;
          deleteFn(id);
        }, delay + 50);
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
        zIndex: '9999',
        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
      }}
    ></div>
  );
};

export default MouseEffectItemDiv;
