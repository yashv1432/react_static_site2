import React from 'react'
import '../utils/gayatri.css'
// import Scripts from '../components/Scripts'
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import smile from '../Images/HeartEyesEmoji.png'

const HomeCount = () => {


  return (
    <> 
      <div className='smile'>
      <img src={smile} alt="" />
          </div>
    <div className='section3'>
<div className='section3box'>
       <div className="section3box_p1">
    

<CountUp start={0} end={1000} duration={2} >
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <div className='section3box_p12' ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>

           {/* <div className='section3box_p12' data-val="1500" >1000</div> */}
           <div className='section3box_p13' style={{fontFamily:"Gilroy_Bold"}}>CELEBRITIES</div>
       </div>
       <div className="section3box_p1">
           {/* <div className='section3box_p12' data-val="5000" >000</div> */}
           <CountUp start={0} end={5000} duration={2} >
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <div className='section3box_p12' ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>
           <div className='section3box_p13' style={{fontFamily:"Gilroy_Bold"}}>INFLUENCERS</div>
       </div>
       <div className="section3box_p1">
           {/* <div className='section3box_p12' data-val="1500" >000</div> */}
           <CountUp start={0} end={1500} duration={2} >
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <div className='section3box_p12' ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>
           <div className='section3box_p13' style={{fontFamily:"Gilroy_Bold"}}>BRANDS</div>
       </div>
</div>
    </div>
    </>
  )
}

export default HomeCount;