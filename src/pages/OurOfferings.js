import React from 'react'
import InfluencerMarketing from '../components/InfluencerMarketing';
import WhatWeOffer from '../components/WhatWeOffer';
import BrandPramotion from '../components/BrandPramotion';
import ProductPramotion from '../components/ProductPramotion';
import VideoAdvertisement from '../components/VideoAdvertisement';
import GiveawayCampaign from '../components/GiveawayCampaign'
import MemeMarketing from '../components/MemeMarketing';
import Testimonials from '../components/Testimonials';

const OurOfferings = () => {
  return (
    <>
      <div className="fluid-container">
          <WhatWeOffer/>
          <InfluencerMarketing/>
          <ProductPramotion/>
          <BrandPramotion/> 
          <VideoAdvertisement/>
          <GiveawayCampaign/>
           <MemeMarketing/>
          <Testimonials/>
          {/* <h4 className='text-white pt-5 text-center'>OurOfferings</h4> */}
      </div>
    </>
  )
}

export default OurOfferings;
