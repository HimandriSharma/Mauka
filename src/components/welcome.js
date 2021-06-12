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
                <h1>Welcome to Nature</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua.</h4>
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
