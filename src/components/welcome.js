import React from 'react'
import leaf from '../assets/Group114.png'
import blue from '../assets/Group205.png'
import trans from '../assets/Group207.png'
import './welcome.css'
function welcome() {
    return (
        <div>
            <div className='imag'><img src={leaf} alt=''/></div>
            <div className='txt'>
                <div style={{fontSize:'40px',margin:'20px'}}>Welcome to Nature</div>
                <div style={{fontSize:'15px',margin:'20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
                incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <div className='crd'><img src={trans} alt=''/></div>
                <div className='crd'><img src={blue} alt=''/></div>
                <div className='crd'><img src={trans} alt=''/></div>
                <div className='crd'><img src={trans} alt=''/></div>
            </div>
        </div>
    )
}

export default welcome
