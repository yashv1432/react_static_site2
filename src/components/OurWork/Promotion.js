import React from 'react'
import biw from '../../Images/BiwBiw.png'
import mob from '../../Images/Rectangle11.png'
import vector14 from '../../Images/Vector14.png'
import {PromotionApi} from '../OurWork/PromotionApi'
import {Animator, ScrollContainer, ScrollPage, MoveOut} from "react-scroll-motion"
const Promotion = () => {
  return (
    <div className='Maine_elements'>
       <div className="scroll_elements1">     
            <ScrollContainer> 
              <ScrollPage page={0}>
                <Animator animation = {MoveOut(0,500)}>
                 <span> Beaty & <br/> skincare </span> 
                </Animator>
             </ScrollPage>
            </ScrollContainer>  
            </div> {""}
            <div className="scroll_elements">     
            <ScrollContainer> 
              <ScrollPage page={0}>
                <Animator animation = {MoveOut(0,500)}>
                  
                </Animator>
             </ScrollPage>
            </ScrollContainer>  
            </div> {""}
        <div className="row" style={{justifyContent:"center"}}>   
               
        {PromotionApi.map((curElem)=> {
        const {promHead, promBox1, promBox2, promBox3,  promNum1, promNum2, promBoxImg} = curElem;
        return(
            <div className="promMainBox col-md-6 col-lg-6 col-sm-12 mt-5" >
          <div >
              
            <div className="promHead">{promHead}</div>
            <div className='promBox'>
                <div className="promBox1 col-6">
                  <div className="headImg">
                  <img src={biw} alt="" />
                      </div>  
                    <h2>{promBox2}</h2>
                    <p>{promBox3}</p>
                    <div className='promBox12'>
                        <div>
                            <div className='promNum'>{promNum1}</div>
                            <div className='promTotal'>Total Influencers</div>
                        </div>
                        <div>
                            <div className='promNum'>{promNum2}</div>
                            <div className='promTotal'>Total Reach</div>
                        </div>
                    </div>
                </div>
                <div className="promBox2 col-6">
                    <img src={mob} alt="" />
                    <button className="CaseStudyButton">
                         <h2>Case Study</h2>
                       <img src={vector14} alt="" />  </button>
                </div>
            </div>
            </div>
              </div>  
                      );
            })
        }
        </div>
    </div>
  )
}

export default Promotion;