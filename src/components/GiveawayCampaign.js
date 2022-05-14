import React from "react";
import gift_image from "../components/icons/gift_image.png";
import campaign_emoji_1 from "../components/icons/campaign_emoji_1.png";
import campaign_emoji_2 from "../components/icons/campaign_emoji_2.png";
import campaign_emoji_3 from "../components/icons/campaign_emoji_3.png";

const GiveawayCampaign = () => {
  return (
    <div className="campaign_giveaway">
      <div className="campaign_content">
        <h1>
          <span> Giveaway </span> Campaigns
        </h1>
        <p>
        <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis nunc<br/>
          congue quam sociis libero eu. Dui commodo Id nibh odio arcu<br/> lectus.
          Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate<br/> diam duis
          tincidunt. <br/> <br/> Mauris eu blandit viverra vitae sit velit sit ut aliquet.
          Sit suspendisse. <br/>Id nibh odio arcu lectus. Eget auctor suspendisse sem
          vel vestibulum.<br/> Ipsum vulputate diam duis tincidunt.
        </p>
        <div className="Campaign_emojis my-5">
          <div className="emoji_1 mx-2"> <img src={campaign_emoji_1} alt="campaign_emoji_1" /> </div>
          <div className="emoji_1 mx-4"> <img src={campaign_emoji_2} alt="campaign_emoji_2" /> </div>
          <div className="emoji_1 mx-4"> <img src={campaign_emoji_3} alt="campaign_emoji_3" /> </div>
        </div>
      </div>
      <div className="campaign_animation">
        <div className="gift_image">
          <img src={gift_image} alt="gift_image"/>
        </div>
        <div className="glass_morphism">
          <button className="giveaway">GIVEAWAY CONTENTS</button>
        </div>
      </div>
    </div>
  );
};

export default GiveawayCampaign;
