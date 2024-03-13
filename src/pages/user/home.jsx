import React from 'react';
import Navbar from '../../components/navbar';
import Hero from '../../components/hero'
import ImpactStats from '../../components/impactStats';
import Fundraising from '../../components/fundRaising';
import Campaign from '../../components/campaign';
import CharityComponent from '../../components/charity';
import Banner from '../../components/features';
import JoinCommunity from '../../components/joinCommunity';
import CampaignDisplay from '../../components/campaign2';
import Footer from '../../components/footer';

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <ImpactStats />
      <Fundraising />
      <Campaign />
      <CharityComponent />
      <Banner />
      <JoinCommunity />
      <CampaignDisplay />
      <Footer />
    </>
  );
}

export default Home;
