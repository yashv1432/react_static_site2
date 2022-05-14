import React, { useState, useEffect } from 'react'
import { Colors } from '../utils/Colors'
// import { Link } from "react-router-dom";
import Typist from 'react-typist'
import emoji from '../img/emoji.png'
import emoji1 from '../img/emoji1.png'

const HomeTopSection = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    <>
      <div className='row pb-5'>
        <div className='col-lg-7 col-sm-12'>
          <div
            className='top-heading-fontS-42 home-top-col-1'
            style={{
              color: Colors.GoldenYellow,
              fontFamily: 'Playfair_Extrabold'
            }}
          >
            <p className='p-0 m-0'>Influencer Marketing Solutions</p>
            <p className='typewriter'>
              <span>to win you more</span>
              <span className='text-white typist'>
                {count ? (
                  <Typist avgTypingDelay={40} onTypingDone={() => setCount(0)}>
                    <span> Customers</span>
                    <Typist.Backspace count={30} delay={500} />
                    <span> Sales</span>
                    <Typist.Backspace count={30} delay={500} />
                    <span> Profits</span>
                    <Typist.Backspace count={30} delay={500} />
                    <span> Reach</span>
                    <Typist.Backspace count={30} delay={500} />
                    <span> Audience</span>
                    <Typist.Backspace count={30} delay={500} />
                  </Typist>
                ) : (
                  ''
                )}
              </span>
            </p>
          </div>
          <div className='home-second-text' style={{ fontFamily: 'Gilroy_Bold' }}>
            <span className='LightBlue'>
              Unified Web Options & Services (UWO)
            </span>
            <span className='text-white home-top-text'>
              {' '}
              is a leading Advertisement Company
              <br />
              that have collaborated with 100+ Companies along with thousands of
              influencers
              <br />
              including Bollywood celebrities and Digital content creators all
              around the Globe.
            </span>
          </div>
          <div className='row home-top-col-row2'>
            <div className='col-lg-5 col-sm-12 zoom'>
              <button className='btn btn-influencer home-top-btn-radius home-top-btn-size influencer text-white'>
                <span className='influencer-btn home-top-font'>I am an</span>
                <br />
                <span className='influencer-btn1'>Influencer</span>
              </button>
              <img src={emoji} width="40vh" className='emoji'/>
            </div>
            <div className='col-lg-5 col-sm-12 zoom'>
              <button className='btn btn-brand home-top-btn-radius home-top-btn-size brand text-white ml-4'>
                <span className='brand-btn home-top-font'>I am an</span>
                <br />
                <span className='influencer-btn1 brand-text'>Brand</span>
              </button>
              <img src={emoji1} width="38vh" className='emoji1'/>
            </div>
            <div className='col-lg-2'></div>
          </div>
          <div className='watch-demo-margin'>
            <button className='btn w-25 dark-blue-color watch-demo yellow-btn border-0 zoom mt-2 watch-btn'>
              <i class='fas fa-video'></i>Watch Demo
            </button>
          </div>
        </div>
        <div className='col-lg-5 col-sm-12 shape-column'>
          <div className='row shape-row1'>
            <div className='col-lg-6 col-sm-4 col-md-4 col-xs-4'>
              <div className='btn purple-shape shape1 zoom top-shape1'></div>
            </div>
            <div className='col-lg-6 col-sm-4 col-md-4 col-xs-4'>
              <div className='btn yellow-shape shape2 zoom top-shape2'></div>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-lg-6 col-sm-4 col-md-4 col-xs-4'>
              <div className='btn grey-shape shape3 zoom top-shape3'></div>
            </div>
            <div className='col-lg-6 col-sm-4 col-md-4 col-xs-4'>
              <div className='btn lightblue-shape shape4 zoom top-shape4'></div>
            </div>
          </div>
          <div>
            <div className='row mt-4'>
              <div className='col-lg-12 col-sm-4 col-md-4 col-xs-4'>
                <div className='btn darkblue-shape shape5 zoom top-shape5'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTopSection
