import React from 'react';
import useMouseEffect from '../../../hooks/useMouseEffect';
import MouseEffectItemDiv from './MouseEffectItemDiv';

type Props = {};

const MouseEffector = (props: Props) => {
  const { mouseEffects, deleteEffect } = useMouseEffect();

  return (
    <>
      {Array.from(mouseEffects) &&
        Array.from(mouseEffects).map(([key, { id, x, y, size }]) => {
          return (
            <React.Fragment key={key}>
              <MouseEffectItemDiv id={id} mouseX={x} mouseY={y} size={size} deleteFn={deleteEffect} />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default MouseEffector;
