import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pic from '../Images/pic.jpg'


export default function HomeBrand() {
  const options = {
    center: true,
    dots: false,
    loop:true,
    autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 3,
        },
        400: {
            items: 3,
        },
        600: {
            items: 3,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};
  return (
    <div className="Container_1">
    <h1 className="my-5"><span style={{color:"#ffc100"}}>Brands</span> with us</h1>
       <div className='lorem'>

      <OwlCarousel className="owl-theme lor" loop margin={10} nav 
      // items={5}
       {...options}>
           <div className="cent">

        <div className="brandBox" >

          <img className="item123"
              src={pic}
            
          />
        </div>
      
           </div>
           <div className="cent">

<div className="brandBox" >

  <img className="item123"
      src={pic}
    
  />
</div>

   </div>
      
   <div className="cent">

<div className="brandBox" >

  <img className="item123"
      src={pic}
    
  />
</div>

   </div>
      
   <div className="cent">

<div className="brandBox" >

  <img className="item123"
      src={pic}
    
  />
</div>

   </div>
      
      
   <div className="cent">

<div className="brandBox" >

  <img className="item123"
      src={pic}
    
  />
</div>

   </div>
       
   <div className="cent">

<div className="brandBox" >

  <img className="item123"
      src={pic}
    
  />
</div>

   </div>
      
     
      </OwlCarousel>;
       </div>
    </div>
  );
}
