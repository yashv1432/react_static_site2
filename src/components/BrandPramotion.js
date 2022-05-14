import React, {useEffect,useState} from 'react'
import Typist from 'react-typist'
import Vector5 from '../Images/Vector5.png'
import Vector6 from '../Images/Vector6.png'
import imageMain from '../Images/BrandProp.png'
import Vector7 from '../Images/Vector7.png'
import Vector8 from '../Images/Vector8.png'
import Vector9 from '../Images/Vector9.png'
import Vector10 from '../Images/Vector10.png'
import Vector11 from '../Images/Vector11.png'
import Vector12 from '../Images/Vector12.png'
import Vector13 from '../Images/Vector13.png'

const BrandPramotion = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    
       <div>
        <div class="container">
  <div class="row brandcolB">
    
    <div class="col-12 col-sm-12 col-lg-6 col-md-6 prodProm12B">
      <div className="prodPromImgB">
        <img className='imageMain' src={imageMain} alt="" />
        {/* <img className='Vector7'  src={Vector7} alt="" />
        <img className='Vector8'  src={Vector8} alt="" />
        <img className='Vector9'  src={Vector9} alt="" />
        <img className='Vector10'  src={Vector10} alt="" />
        <img className='Vector11'  src={Vector11} alt="" />
        <img className='Vector12'  src={Vector12} alt="" />
        <img className='Vector13'  src={Vector13} alt="" /> */}
        
      </div>
    </div>
    <div class="col-12 col-sm-12 col-lg-6 col-md-6 prodProm123B">
      <div className='prodProm1B'>
    <span style={{color:"#ffc100"}}>Brand</span> Promotions
          </div>
      <div className='prodProm2B'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis nunc congue quam sociis libero eu. Dui commodo  Id nibh odio arcu lectus. Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate diam duis tincidunt.
<br/> <br/>
Mauris eu blandit viverra vitae sit velit sit ut aliquet. Sit suspendisse. Id nibh odio arcu lectus. Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate diam duis tincidunt.</div>
{count ? (
                  <Typist avgTypingDelay={40} onTypingDone={() => setCount(1)}>
    <div className='prodProm3B'> Promote   <img className='prodProm3Bimg' src={Vector5}/>     your Brand to a vast audience     <img className='prodProm3Bimg' src={Vector6}/>   </div>
    <Typist.Backspace  />

    </Typist>
     ) : (
       ''
       )}
    </div>
 
 
 
 
  </div>
  </div>
  </div>
  )
}

export default BrandPramotion
