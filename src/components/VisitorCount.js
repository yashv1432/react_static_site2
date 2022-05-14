import React, { useEffect, useState } from "react";

const VisitorCount = () => {
  const [visitorsCount, setVisitorsCount] = useState();

  const getVisitorCount = () => {
    fetch(
      "https://api.countapi.xyz/update/uwo_influencer/visitor_count/?amount=1"
    )
      .then((res) => res.json())
      .then((json) => {
        setVisitorsCount(json.value);
      });
      };

  useEffect(() => {
      getVisitorCount();
  }, []);

  return <div className="Visitors_Count" >Visitors Count:  <span>{ JSON.stringify(visitorsCount)}</span></div>
  
};

export default VisitorCount;
