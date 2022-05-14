import React from 'react'
import circle from '../img/top-circle.png'
import topFb from '../img/top-facebook.png'
import topInsta from '../img/top-insta.png'
import topYT from '../img/top-YT.png'

const WhatWeOffer = () => {
  return (
    <>
    <div className='container-fluid main-container'>
      <div className='bg-glass-morphism'>
        <div className='row'>
          <div className='col-lg-6 col-sm-12 col-xs-12 col-md-4'>
            <div className='section1-top-text'>
              <h1 className='text-white text-playfair-display'>
                What We <span style={{ color: '#ffc100' }}>Offer?</span>
              </h1>
              <p className='text-white text-gilroy-medium section1-second-text1 mt-4'>  
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Magnis
                nunc congue quam sociis libero eu. Dui commodo <br/>
              </p>
              <p className='text-white text-gilroy-medium section1-second-text2 mt-4'>Id nibh odio arcu
                lectus. Eget auctor suspendisse sem vel<br/>vestibulum. Ipsum
                vulputate diam duis tincidunt. Mauris <br/> eu blandit viverra vitae
                sit velit sit <br/> ut aliquet. Sit suspendisse.
               </p> 
            </div>
            <div className='connect-btn-top'>
            <button className='btn  dark-blue-color text-white connect-btn btn-brand border-0 zoom mt-2'>
              <span>Connect with us</span>
            </button>
          </div>
          </div>
          <div className='col-lg-6 col-sm-12 col-xs-12 col-md-4'>
            <div className='animmated-boxes'>
                <div className='animation-bounce'>
                    <img src={topInsta} className="top-icon-size insta-icon"/>
                    <div className='glass-box-bg glass-box2'>
                        <img src={''}/>
                    </div>
                    <div className='glass-box-bg glass-box3'>
                        <img src={''}/>
                    </div>
                    <img src={topFb} className="top-icon-size fb-icon"/>
                    <img src={topYT} className="top-icon-size YT-icon"/>
                    <div className='glass-box-bg glass-box1'>
                        <img src={''}/>
                    </div>
                </div>
                <div className='white-round'>
                    <img src={circle} className="circle-img"/>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default WhatWeOffer
