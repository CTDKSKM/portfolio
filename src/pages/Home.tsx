import React from 'react';
import Header from '../components/Home/Header';

import Main from '../components/Home/Main';
import VisitedChecker from '../components/Home/VisitedChecker';
import MouseEffector from '../components/common/mouseEffect/MouseEffector';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <VisitedChecker />
      <Header />
      <Main />

      {/* <Footer /> */}
      <MouseEffector />
    </>
  );
};

export default Home;
