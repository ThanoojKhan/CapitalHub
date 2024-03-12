import React from 'react';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero'
import ImpactStats from '../../components/impactStats';
import FundraisingSection from '../../components/fundRaising';
function Home() {

  return (
    <>
      <Navbar />
      <Hero/>
      <ImpactStats/>
      <FundraisingSection/>
    </>
  );
}

export default Home;
