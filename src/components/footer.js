import React from 'react'
import './footer.css'
import logo from '../assets/Group225.png'
import icon1 from '../assets/Group99.png'
import icon2 from '../assets/Group100.png'
import icon3 from '../assets/Group105.png'
function footer() {
    return (
        <div className='foot'>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <div >
                <img src={logo} alt=''/>
                <div>
                    <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                    elit, sed do eiusmod tempor 
                    </h4>
                </div>
            </div>
            <div>
                    <h3>
                        <b>Information</b>
                    </h3>
                    <h3>
                        About Us
                    </h3>
                    <h3>
                        Products
                    </h3>
                    <h3>
                        Contact Us
                    </h3>
                    <h3>
                        Terms of Service
                    </h3>
                </div>
                <div>
                    <h3>
                        <b>
                            Follow Us
                        </b>
                    </h3>
                    <img src={icon1} alt='' style={{padding:'10px'}}/>
                    <img src={icon2} alt='' style={{padding:'10px'}}/>
                    <img src={icon3} alt='' style={{padding:'10px'}}/>
                </div>
        </div>
        </div>
    )
}

export default footer
