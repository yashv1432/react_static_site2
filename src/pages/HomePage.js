// import React, { useEffect, useState } from "react";
import WhatWeDo from "../components/WhatWeDo.js"
import Accordion from '../components/Accordion'
import HomeTopSection from "../components/HomeTopSection";
import HomeCount from "../components/HomeCount";
import TopInfluencer from "../components/TopInfluencer.js";
import HomeBrand from "../components/HomeBrand.js";

const HomePage = () => {
  return (
    <>
      <div className="fluid-container">
        <HomeTopSection />
        <WhatWeDo/>
        <HomeCount/>
        <TopInfluencer/>
        <HomeBrand/>
        <Accordion/>
      </div>
    </>
  );
};

export default HomePage;
