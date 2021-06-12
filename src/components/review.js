import React from 'react'
import quote from '../assets/Group86.png'
import woman from '../assets/woman.png'
import './review.css'
function review() {
    return (
        <div className='leaf'>
           <div>
               <img src={quote} alt='/'/>
            </div> 
            <div>
                <img src={woman} alt='/' className='woman'/>
                <h1>Jane Doe</h1>
                <h4>Thank you for all the amazing produce and products you deliver each week…<br/>
you make my life so easy an bring goodness into our family eating. <br/>
I’ve been roasting a lot of brussel sprouts and</h4>
            </div>

            <div>
                <h1>
                    Subscribe to Our Newsletter
                </h1>
                <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua. 
                </h4>
                <input type="text" email="email"/>
                <input type="submit" vale="Subscribe"/>
            </div>
        </div>
    )
}

export default review
