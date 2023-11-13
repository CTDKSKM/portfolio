import React from 'react';
import Header from '../components/Home/Header';
import Intro from '../components/Home/Intro';
import Footer from '../components/Home/Footer';
import About from '../components/Home/About';
import Skills from '../components/Home/Skills';
import Archiving from '../components/Home/Archiving';
import Projects from '../components/Home/Projects';
import ScrollToTopButton from '../components/Home/ScrollToTopButton';
import MouseEffect from '../components/MouseEffect';
import useMouseEffect from '../hooks/useMouseEffect';

type Props = {};

const Home = (props: Props) => {
  const { mouseEffects, deleteEffect } = useMouseEffect();

  return (
    <>
      <Header />

      <Intro />
      <About />
      <Skills />
      <Archiving />
      <Projects />

      <ScrollToTopButton />
      <Footer />

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
