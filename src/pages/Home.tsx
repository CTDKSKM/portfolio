import React from 'react';
import Header from '../components/Home/Header';
import MouseEffect from '../components/MouseEffect';
import useMouseEffect from '../hooks/useMouseEffect';
import Main from '../components/Home/Main';
import VisitedChecker from '../components/Home/VisitedChecker';

type Props = {};

const Home = (props: Props) => {
  const { mouseEffects, deleteEffect } = useMouseEffect();

  return (
    <>
      <VisitedChecker />
      <Header />
      <Main />

      {/* <Footer /> */}
      {Array.from(mouseEffects) &&
        Array.from(mouseEffects).map(([key, { id, x, y, size }]) => {
          return (
            <React.Fragment key={key}>
              <MouseEffect id={id} mouseX={x} mouseY={y} size={size} deleteFn={deleteEffect} />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Home;
