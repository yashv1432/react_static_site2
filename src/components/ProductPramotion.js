import React ,{useEffect, useState} from 'react'
import Typist from 'react-typist'
import Vector1 from '../Images/Vector1.png'
import Vector2 from '../Images/Vector2.png'
import Vector3 from '../Images/Vector3.png'
import Vector4 from '../Images/Vector4.png'
import Asset from '../Images/Asset142.png'


const ProductPramotion = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log('Count: ' + count)
    setCount(1)
  }, [count])
  return (
    <div>
        <div class="container">
  <div class="row brandcol">
    <div class="col-12 col-sm-12 col-lg-6 col-md-6">
      <div className='prodProm1'>
    <span style={{color:"#ffc100"}}>Product</span> Promotions
          </div>
      <div className='prodProm2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis nunc congue quam sociis libero eu. Dui commodo  Id nibh odio arcu lectus. Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate diam duis tincidunt.
<br/> <br/>
Mauris eu blandit viverra vitae sit velit sit ut aliquet. Sit suspendisse. Id nibh odio arcu lectus. Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate diam duis tincidunt.</div>

{count ? (
                  <Typist avgTypingDelay={40} onTypingDone={() => setCount(1)}>
    <div className='prodProm3'> <img className='prodProm3img' src={Vector1}/> Place your Product in the  <img className='prodProm3img' src={Vector2}/>       of every  <img className='prodProm3img' src={Vector3}/>      on  <img className='prodProm3img' src={Vector4}/>    </div>
    <Typist.Backspace />

     </Typist>
      ) : (
        ''
        )}
        </div>
    <div class="col-12 col-sm-12 col-lg-6 col-md-6 prodPromImg123">
      <div className="prodPromImg">
          <div className="prodPromImg1" animation-delay="250" animation-type="fadeIn">
              <img src={Asset} alt="" />
          </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default ProductPramotion
