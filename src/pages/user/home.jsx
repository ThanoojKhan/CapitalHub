import React, { lazy, Suspense } from 'react';
import Navbar from '../../components/navbar';

const LazyHero = lazy(() => import('../../components/hero'));
const LazyImpactStats = lazy(() => import('../../components/impactStats'));
const LazyFundraising = lazy(() => import('../../components/fundRaising'));
const LazyCampaign = lazy(() => import('../../components/campaign'));
const LazyCharityComponent = lazy(() => import('../../components/charity'));
const LazyBanner = lazy(() => import('../../components/features'));
const LazyJoinCommunity = lazy(() => import('../../components/joinCommunity'));
const LazyCampaignDisplay = lazy(() => import('../../components/campaign2'));
const LazyFooter = lazy(() => import('../../components/footer'));

function Home() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHero />
        <LazyImpactStats />
        <LazyFundraising />
        <LazyCampaign />
        <LazyCharityComponent />
        <LazyBanner />
        <LazyJoinCommunity />
        <LazyCampaignDisplay />
        <LazyFooter />
      </Suspense>
    </>
  );
}

export default Home;
