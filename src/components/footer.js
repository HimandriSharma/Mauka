import React from 'react';
import './footer.css';
import logo from '../assets/Group225.png';
import icon1 from '../assets/Group99.png';
import icon2 from '../assets/Group100.png';
import icon3 from '../assets/Group105.png';
import line from '../assets/line.png';
import copyright from '../assets/copyright.png';
function footer() {
    return (
        <div className='foot'>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',margin:'100px'}}>
            <div style={{display:'flex',flexDirection:'column',textAlign:'left'}}>
                <div style={{margin:'30px'}}>
                <img src={logo} alt=''/>
                </div>
                <div style={{fontSize:'15px',margin:'10px'}}>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                    elit, sed do eiusmod tempor 
                    
                </div>
                <img src={line} alt="" style={{width:'90px'}}/>
                <div style={{display:'flex',flexDirection:'row',textAlign:'center',alignItems:'center'}}>
                    <img style={{height:'20px',margin:'5px'}}src={copyright} alt=""/>
                    <div><b>Copyright 2020 Nature</b></div>
                </div>
            </div>
            
            <div style={{textAlign:'left'}}>
                    <div style={{margin:'15px',display:'flex',flexDirection:'column',textAlign:'left'}}>
                        <b>Information</b>
                        <img src={line} alt=""/>
                    </div>

                    <div style={{margin:'10px'}}>
                        About Us
                    </div >
                    <div style={{margin:'10px'}}>
                        Products
                    </div>
                    <div style={{margin:'10px'}}>
                        Contact Us
                    </div>
                    <div style={{margin:'10px'}}>
                        Terms of Service
                    </div>
                </div>
                <div style={{textAlign:'left',margin:'15px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <b>
                            Follow Us
                        </b>
                        <img src={line} style={{width:'80px'}} alt=""/>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{margin:'10px'}}><img src={icon1} alt='' style={{padding:'10px'}}/></div>
                    <div style={{margin:'10px'}}><img src={icon2} alt='' style={{padding:'10px'}}/></div>
                    <div style={{margin:'10px'}}><img src={icon3} alt='' style={{padding:'10px'}}/></div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default footer
