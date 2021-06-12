import React from 'react';
import log1 from '../assets/Group39.png';
import log2 from '../assets/Group64.png';
import log3 from '../assets/Group55.png';
import './present.css';
function present() {
    return (
        <div>
            <div style={{fontSize:'23px'}}>
            <h1>Proudly presented by</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>
incididunt ut labore et dolore magna aliqua.</h4>
            </div>
            <div className='group'>
                <div className='sty'><img src={log1} alt=''/></div>
                <div className='sty'><img src={log2} alt=''/></div>
                <div className='sty'><img src={log3} alt=''/></div>
                <div className='sty'><img src={log2} alt=''/></div>
                <div className='sty'><img src={log1} alt=''/></div>
            </div>
        </div>
    )
}

export default present
