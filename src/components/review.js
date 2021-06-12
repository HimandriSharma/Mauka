import React from 'react'
import quote from '../assets/Group86.png'
import woman from '../assets/woman.png'
import './review.css'
import star from '../assets/star.png'
import borcircle from '../assets/borCircle.png'
import filcircle from '../assets/filCircle.png'
function review() {
    return (
        <div className='leaf'> 
           <div style={{margin:'20px'}}> 
               <img src={quote} alt='/'/>
            </div> 
            <div>
                <img src={woman} alt='/' style={{
          borderRadius: "50%",
          height:'97.6px',
          width:'97.6px'
        }}/>
                <div style={{fontSize:'20px',margin:'5px'}}>Jane Doe</div>
                <div style={{margin:'20px'}}>
                    <img src={star} alt='/' style={{height:'30px',width:'30px'}}/>
                    <img src={star} alt='/' style={{height:'30px',width:'30px'}}/>
                    <img src={star} alt='/' style={{height:'30px',width:'30px'}}/>
                    <img src={star} alt='/' style={{height:'30px',width:'30px'}}/>
                    <img src={star} alt='/' style={{height:'30px',width:'30px'}}/>
                </div>
                <div>Thank you for all the amazing produce and products you deliver each week…<br/><br/>
you make my life so easy an bring goodness into our family eating. <br/><br/>
I’ve been roasting a lot of brussel sprouts and</div>
            </div>
            <div style={{margin:'20px'}}>
                    <img src={borcircle} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
                    <img src={filcircle} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
                    <img src={borcircle} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
                    <img src={borcircle} alt='/' style={{height:'10px',width:'10px',margin:'6px'}}/>
            </div>
            <div>
                <div style={{fontSize:'30px', marginTop:'125px'}}>
                    Subscribe to Our Newsletter
                </div>
                <div style={{margin:'30px',fontSize:'15px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua. 
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <div><input type="text" email="email" placeholder="Enter your email address" className='inp'/></div>
                <div style={{margin:'20px'}}><button className="btn"><b>Subscribe</b></button></div>
                </div>
            </div>
           
        </div>
    )
}

export default review
